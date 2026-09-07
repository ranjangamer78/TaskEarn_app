/**
 * Google Drive Direct Download Utility
 * Converts standard Google Drive sharing links into direct one-click APK download URLs.
 */

export function extractDriveFileId(inputUrl: string): string | null {
  if (!inputUrl || typeof inputUrl !== 'string') return null;
  const trimmed = inputUrl.trim();

  // Pattern 1: https://drive.google.com/file/d/FILE_ID/...
  const fileDPattern = /\/file\/d\/([a-zA-Z0-9_-]{20,})/;
  const matchD = trimmed.match(fileDPattern);
  if (matchD && matchD[1]) return matchD[1];

  // Pattern 2: id=FILE_ID
  const idParamPattern = /[?&]id=([a-zA-Z0-9_-]{20,})/;
  const matchId = trimmed.match(idParamPattern);
  if (matchId && matchId[1]) return matchId[1];

  // Pattern 3: open?id=FILE_ID
  const openPattern = /\/open\?id=([a-zA-Z0-9_-]{20,})/;
  const matchOpen = trimmed.match(openPattern);
  if (matchOpen && matchOpen[1]) return matchOpen[1];

  // Pattern 4: Bare ID (alphanumeric string of typical length 25-45 chars)
  if (/^[a-zA-Z0-9_-]{25,50}$/.test(trimmed)) {
    return trimmed;
  }

  return null;
}

export function convertToDirectDriveDownload(inputUrl: string): {
  directUrl: string;
  altDirectUrl: string;
  viewUrl: string;
  fileId: string | null;
  isDrive: boolean;
} {
  const fileId = extractDriveFileId(inputUrl);
  if (fileId) {
    return {
      directUrl: `https://drive.google.com/uc?export=download&id=${fileId}&confirm=t`,
      altDirectUrl: `https://drive.usercontent.google.com/download?id=${fileId}&export=download&confirm=t`,
      viewUrl: `https://drive.google.com/file/d/${fileId}/view?usp=sharing`,
      fileId,
      isDrive: true,
    };
  }

  // If it's already a direct link or other URL
  const trimmed = inputUrl.trim();
  return {
    directUrl: trimmed,
    altDirectUrl: trimmed,
    viewUrl: trimmed,
    fileId: null,
    isDrive: false,
  };
}

/**
 * Directly downloads the APK.
 * Opens the direct Google Drive link immediately.
 */
export function triggerApkDownload(
  url: string,
  filename = 'TaskEarn_v2.4.1.apk'
): boolean {
  const { directUrl, isDrive } = convertToDirectDriveDownload(url);

  if (directUrl) {
    // 1. Try invisible link click with target _blank
    const a = document.createElement('a');
    a.href = directUrl;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.setAttribute('download', filename);
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      if (document.body.contains(a)) {
        document.body.removeChild(a);
      }
    }, 500);

    return true;
  }
  return false;
}

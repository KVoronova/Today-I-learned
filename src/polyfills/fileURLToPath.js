/**
 * A manual polyfill for Node.js `fileURLToPath`.
 * Note: This implementation assumes a basic use case and might not cover all edge cases.
 * @param {string|URL} url The file URL to convert to a file path.
 * @returns {string} The file path.
 */
function fileURLToPath(url) {
  if (typeof url === 'string') {
    url = new URL(url);
  }

  if (url.protocol !== 'file:') {
    throw new Error('The URL must be of file protocol.');
  }

  let path = decodeURIComponent(url.pathname);

  // Adjust for Windows paths
  if (process.platform === 'win32') {
    // If the path starts with a drive letter, remove the leading slash
    if (/^\/[a-zA-Z]:\//.test(path)) {
      path = path.substring(1);
    }
  }

  return path;
}

export { fileURLToPath };
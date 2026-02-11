/**
 * Validation utilities.
 */

export function isEmail(str) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
}

export function isURL(str) {
  try {
    new URL(str);
    return true;
  } catch {
    return false;
  }
}

export function isNonEmpty(str) {
  return typeof str === 'string' && str.trim().length > 0;
}

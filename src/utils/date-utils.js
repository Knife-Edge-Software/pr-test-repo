/**
 * Date formatting and parsing utilities.
 * @module date-utils
 */

/**
 * Format a date for display.
 * @param {Date} date
 * @param {string} [format='iso'] - 'iso', 'us', or 'eu'
 * @returns {string}
 */
export function formatDate(date, format = 'iso') {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  switch (format) {
    case 'us': return `${month}/${day}/${year}`;
    case 'eu': return `${day}/${month}/${year}`;
    default:   return `${year}-${month}-${day}`;
  }
}

export function parseDate(str) {
  const [year, month, day] = str.split('-').map(Number);
  return new Date(year, month - 1, day);
}

export function isToday(date) {
  const now = new Date();
  return date.getFullYear() === now.getFullYear()
    && date.getMonth() === now.getMonth()
    && date.getDate() === now.getDate();
}

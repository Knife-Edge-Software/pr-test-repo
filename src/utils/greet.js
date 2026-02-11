/**
 * Generate a greeting message.
 * @param {string} name - The name to greet
 * @param {string} [timeOfDay] - Optional time of day for contextual greeting
 * @returns {string} The greeting
 */
export function greet(name, timeOfDay) {
  if (timeOfDay === 'morning') {
    return `Good morning, ${name}!`;
  } else if (timeOfDay === 'evening') {
    return `Good evening, ${name}!`;
  }
  return `Hello, ${name}!`;
}

export function farewell(name) {
  return `Goodbye, ${name}! See you soon.`;
}

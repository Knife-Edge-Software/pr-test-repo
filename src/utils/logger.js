/**
 * Simple logger utility (WIP).
 */

const LOG_LEVELS = ['debug', 'info', 'warn', 'error'];

export function createLogger(prefix) {
  const logger = {};
  for (const level of LOG_LEVELS) {
    logger[level] = (...args) => {
      console[level](`[${prefix}]`, ...args);
    };
  }
  return logger;
}

// TODO: Add file transport
// TODO: Add log level filtering
// TODO: Add timestamp formatting

import { greet } from './utils/greet.js';
import { formatDate } from './utils/date.js';
import { Button } from './components/Button.js';

function main() {
  const message = greet('World');
  console.log(message);
  console.log(formatDate(new Date()));

  const btn = new Button('Click me');
  btn.render();
}

main();

/**
 * A simple button component with event handling.
 */
export class Button {
  constructor(label, options = {}) {
    this.label = label;
    this.disabled = false;
    this.variant = options.variant || 'default';
    this.onClick = options.onClick || null;
  }

  render() {
    const el = document.createElement('button');
    el.textContent = this.label;
    el.disabled = this.disabled;
    el.className = `btn btn-${this.variant}`;

    if (this.onClick) {
      el.addEventListener('click', this.onClick);
    }

    return el;
  }

  setDisabled(value) {
    this.disabled = value;
  }

  setLabel(label) {
    this.label = label;
  }
}

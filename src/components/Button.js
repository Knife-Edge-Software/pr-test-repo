/**
 * A simple button component.
 */
export class Button {
  constructor(label) {
    this.label = label;
    this.disabled = false;
  }

  render() {
    const el = document.createElement('button');
    el.textContent = this.label;
    el.disabled = this.disabled;
    return el;
  }

  setDisabled(value) {
    this.disabled = value;
  }
}

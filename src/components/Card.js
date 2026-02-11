/**
 * A card component for displaying content with optional actions.
 */
export class Card {
  constructor(title, body, options = {}) {
    this.title = title;
    this.body = body;
    this.footer = options.footer || null;
    this.variant = options.variant || 'default';
  }

  render() {
    const el = document.createElement('div');
    el.className = `card card-${this.variant}`;
    el.innerHTML = `
      <div class="card-header">
        <h3>${this.title}</h3>
      </div>
      <div class="card-body">
        <p>${this.body}</p>
      </div>
      ${this.footer ? `<div class="card-footer">${this.footer}</div>` : ''}
    `;
    return el;
  }
}

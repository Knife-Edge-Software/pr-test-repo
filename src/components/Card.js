/**
 * A card component for displaying content.
 */
export class Card {
  constructor(title, body) {
    this.title = title;
    this.body = body;
  }

  render() {
    const el = document.createElement('div');
    el.className = 'card';
    el.innerHTML = `
      <h3>${this.title}</h3>
      <p>${this.body}</p>
    `;
    return el;
  }
}

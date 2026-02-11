/**
 * A modal dialog component.
 */
export class Modal {
  constructor(title, content) {
    this.title = title;
    this.content = content;
    this.isOpen = false;
  }

  open() {
    this.isOpen = true;
    this.render();
  }

  close() {
    this.isOpen = false;
    if (this.overlay) {
      this.overlay.remove();
      this.overlay = null;
    }
  }

  render() {
    this.overlay = document.createElement('div');
    this.overlay.className = 'modal-overlay';
    this.overlay.innerHTML = `
      <div class="modal">
        <div class="modal-header">
          <h2>${this.title}</h2>
          <button class="modal-close">&times;</button>
        </div>
        <div class="modal-body">${this.content}</div>
      </div>
    `;

    this.overlay.querySelector('.modal-close')
      .addEventListener('click', () => this.close());

    document.body.appendChild(this.overlay);
    return this.overlay;
  }
}

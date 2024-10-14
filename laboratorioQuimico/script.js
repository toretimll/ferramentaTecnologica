document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.element');
    const modal = document.getElementById('modal');
    const modalName = document.getElementById('modal-name');
    const modalGif = document.getElementById('modal-gif');
    const closeBtn = document.getElementById('close');

    elements.forEach(element => {
        element.addEventListener('click', () => {
            const name = element.getAttribute('data-name');
            const gif = element.getAttribute('data-gif');
            modalName.textContent = name;
            modalGif.src = gif;
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

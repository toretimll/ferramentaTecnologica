document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.element');
    const modal = document.getElementById('modal');
    const modalGif = document.getElementById('modal-gif');
    const modalName = document.getElementById('modal-name'); // Selecionando o elemento para o nome
    const closeBtn = document.getElementById('close');

    elements.forEach(element => {
        element.addEventListener('click', () => {
            const gif = element.getAttribute('data-gif');
            const name = element.querySelector('img').alt; // Usando o atributo alt da imagem como nome
            modalGif.src = gif;
            modalName.textContent = name; // Definindo o nome no modal
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
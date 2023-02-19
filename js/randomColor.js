const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        card.style.backgroundColor = "#" + randomColor;
    });

    card.addEventListener('mouseout', () => {
        card.style.backgroundColor = '#ccc';
    });
});

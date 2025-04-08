document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.toggle-btn').forEach((btn, i) => {
        const contents = document.querySelectorAll('.more-content');
        btn.addEventListener('click', () => {
            const content = contents[i];
            const isHidden = content.style.display === 'none' || content.style.display === '';
            content.style.display = isHidden ? 'block' : 'none';
            btn.textContent = isHidden ? 'Leer menos' : 'Leer más';
        });
    });
});

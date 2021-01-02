const imgs = document.querySelectorAll('.img-div');


imgs.forEach((img) => {
    img.addEventListener('click', () => {
        imgs.forEach((imgDiv) => {
            imgDiv.classList.remove('active');
            imgDiv.children[0].classList.remove('show');
        })
        img.classList.add('active');
        // img.children[0].classList.add("fullOpacity");
        img.children[0].classList.add('show');
    })
})
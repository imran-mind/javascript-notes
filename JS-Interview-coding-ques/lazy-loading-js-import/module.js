const gallery = () =>{
    const main = document.querySelector('main');
    const galleryContainer = document.createElement('section');
    galleryContainer.classList.add("gallery");
    galleryContainer.innerHTML = `
            <figure class="gallery-item">
                <img
                    src="./images/container.jpg"
                    width="480"
                    height="400"
                    loading="lazy"
                    alt="container"
                />
            </figure>

            `;

    main.appendChild(galleryContainer);
}
export default gallery;
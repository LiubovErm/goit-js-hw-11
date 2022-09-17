
function markupGallery(images) {
    return images
        .map(image => 
 `<div class="photo-wrapper">
    <a href="${image.largeImageURL}"
            class="gallery__item" >
    <div class="photo-card">
            <img src="${image.webformatURL}" alt="${image.tags}"  loading="lazy"
            class="gallery__image"/>
        <div class="info">
            <p class="info-item">
            <b>Likes</b>${image.likes}
            </p>
            <p class="info-item">
            <b>Views</b>${image.views}
            </p>
            <p class="info-item">
            <b>Comments</b>${image.comments}
            </p>
            <p class="info-item">
            <b>Downloads</b>${image.downloads}
            </p>
         </div>
    </div>
    </a>
</div>`
      )
    .join('');
}

export { markupGallery };
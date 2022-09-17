import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchGallery } from './js/fetchImages'
import { markupGallery } from './js/markupGallery'


const formEl = document.querySelector('#search-form');
const galleryEl = document.querySelector('.gallery');
const NewGallery = new fetchGallery();

formEl.addEventListener('submit', onSubmitForm);


async function onSubmitForm(event) {
  event.preventDefault();

  NewGallery.query = event.currentTarget.elements['searchQuery'].value.trim();
    console.log(NewGallery.query);
    
  if (NewGallery.query === '') {
      Notiflix.Notify.failure('Треба заповнити форму');
      galleryEl.innerHTML = '';
      event.target.reset();
      return;
  }

  try {
    const response = await NewGallery.getPhotos();

    if (response.data.totalHits === 0) {
        Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
        galleryEl.innerHTML = '';
        event.target.reset();
        return;
      }
      
    // console.log(response.data.hits);
    // markupGallery(response.data.hits);
    //   galleryEl.innerHTML = markupGallery(response.hits);
   
      
  } catch (error) {
    console.log(error);
  }
}




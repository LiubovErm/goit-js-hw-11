import Notiflix from 'notiflix';
import { formEl, galleryEl } from '../src/js/refs'
import { fetchGallery } from './js/fetchImages'
import { markupGallery } from './js/markupGallery'
import { smoothScrolling } from "./js/smoothScrolling";


const NewGallery = new fetchGallery();
formEl.addEventListener('submit', onSubmitForm);


async function onSubmitForm(event) {
  event.preventDefault();

  NewGallery.query = event.currentTarget.elements.searchQuery.value.trim();
  // NewGallery.page = 1;
  // console.log(NewGallery.query);
    
  if (NewGallery.query === '') {
    Notiflix.Notify.failure('Треба заповнити форму');
    galleryEl.innerHTML = '';
    event.target.reset();
    return;
  }

  galleryEl.innerHTML = '';

  try {
    const response = await NewGallery.getPhotos();

    if (response.data.totalHits === 0) {
      Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
      galleryEl.innerHTML = '';
      event.target.reset();
      return;
    }

    markupGallery(response);
    Notiflix.Notify.info(`Hooray! We found ${response.data.totalHits} images.`)

  }
    catch (error) {
      console.log(error);
    }
  }





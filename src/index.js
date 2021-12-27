import './sass/main.scss';
import Notiflix from 'notiflix';
import countryCardTpl from './card.hbs';
import NewsApiService from './images-services';


const refs = {
    searschForm: document.querySelector('[type=submit]'),
    cardContainer: document.querySelector('.gallery'),
}

const loadMoreBtn = document.querySelector('.load-more');
loadMoreBtn.classList.add("display-none");

let nameInput = document.querySelector("[name=searchQuery]")
const newsApiService = new NewsApiService();

refs.searschForm.addEventListener('click', onSearch);

function onSearch(e) {
    e.preventDefault();
    clearHitsContainer();
    newsApiService.query = nameInput.value;
    newsApiService.resetPage();
    newsApiService.fetchArticles().then(appendHitsMarkup);
}


function appendHitsMarkup(hits) {
    if (hits == 0){
        Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.")
    }
    refs.cardContainer.insertAdjacentHTML('beforeend', countryCardTpl(hits)
    );
    loadMoreBtn.classList.remove("display-none");
    loadMoreBtn.addEventListener('click', onLoadMore);
}

function onLoadMore() {
    newsApiService.fetchArticles().then(appendHitsMarkup);
}

function clearHitsContainer() {
    refs.cardContainer.innerHTML = '';
}
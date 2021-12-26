import './sass/main.scss';
import Notiflix from 'notiflix';
import countryCardTpl from './card.hbs';
import NewsApiService from './images-services';


const refs = {
    searschForm: document.querySelector('[type=submit]'),
    cardContainer: document.querySelector('.gallery'),
}

let nameInput = document.querySelector("[name=searchQuery]")
const newsApiService = new NewsApiService();

refs.searschForm.addEventListener('click', onSearch);

function onSearch(e) {
    e.preventDefault();

    newsApiService.query = nameInput.value;
    newsApiService.resetPage();
    newsApiService.fetchArticles().then(appendHitsMarkup);
}


function appendHitsMarkup(hits) {
    refs.cardContainer.insertAdjacentHTML('beforeend', countryCardTpl(hits)
    );

    const loadMoreBtn = document.querySelector('.load-more');
    loadMoreBtn.addEventListener('click', onLoadMore);
}

function onLoadMore() {
    console.log('click')
    newsApiService.fetchArticles().then(appendHitsMarkup);
}









// function buttonResalt(event){
//     fetchImg()
//         .then(renderImgCard)
//         .catch(error => console.log(error));
    
//         function fetchImg() {
//         return fetch(`https://pixabay.com/api/?key=24907304-6f88a85793adc81b0b0dcb604&q=${name}&image_type=photo&per_page=40&orientation=horizontal`)
//         .then(response => {
//             return response.json();
//         },
//         )
//     }


//     function renderImgCard(names) {
//         let markup = countryCardTpl(names);
//         refs.cardContainer.innerHTML = markup;

//         const readMore = document.querySelector('.load-more');
//         readMore.addEventListener('click', addResalt);

//         function addResalt(){
//             // if(perPage > totalHits){
//                 Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.")
//             // }
//             // renderImgCard()
//         }
//     }}
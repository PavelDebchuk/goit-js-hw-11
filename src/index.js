import './sass/main.scss';
import Notiflix from 'notiflix';
import countryCardTpl from './card.hbs';



let nameInput = document.querySelector("[name=searchQuery]");

const refs = {
    cardContainer: document.querySelector('.gallery'),
};
const perPage = 40;

const playButton = document.querySelector('[type=submit]');
playButton.addEventListener('click', buttonResalt) 

function buttonResalt(event){
    event.preventDefault();
    let name = nameInput.value;
    fetchImg()
        .then(renderImgCard)
        .catch(error => console.log(error));
    
        function fetchImg() {
        return fetch(`https://pixabay.com/api/?key=24907304-6f88a85793adc81b0b0dcb604&q=${name}&image_type=photo&per_page=${perPage}&orientation=horizontal`)
        .then(response => {
            return response.json();
        },
        )
    }


    function renderImgCard(names) {
        let markup = countryCardTpl(names);
        refs.cardContainer.innerHTML = markup;

        const readMore = document.querySelector('.load-more');
        readMore.addEventListener('click', addResalt);

        function addResalt(){
            // if(perPage > totalHits){
                Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.")
            // }
            // perPage += 1;
            // renderImgCard()
        }
    }

    
    
}

    // readMore.addEventListener('click', addResalt)
    
    // function addResalt(){
        
    // }
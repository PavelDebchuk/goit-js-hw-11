export default class NewsApiService{
    constructor () {
        this.searchQuery = '';
        this.page = 1;
    }

    fetchArticles(){ 
        const url = `https://pixabay.com/api/?key=24907304-6f88a85793adc81b0b0dcb604&q=${this.searchQuery}&image_type=photo&per_page=40&orientation=horizontal&${this.page}` ;
    return    fetch(url)   
            .then(r => r.json())
            .then(data => {
                this.incrementPage();
                console.log(this);
                return data.hits;
            });
    }

    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}

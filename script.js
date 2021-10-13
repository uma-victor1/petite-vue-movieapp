import { createApp, reactive } from "https://unpkg.com/petite-vue?module";

const app = reactive({
    movieType: "popular",
    results: "",
    async search(){
        const movieSearch = await fetch(`https://api.themoviedb.org/3/movie/${this.movieType}?api_key=fbb0c92eb459272c7afd323360fb1146`)
        this.results = await movieSearch.json()
        
        console.log(results);
        console.log(this.movieType);
    }
})

createApp({app}).mount("#movieapp");

// `url(https://image.tmdb.org/t/p/w500${result.backdrop_path})`
const API_KEY = '9ff89131478074f613648912f9a0d21d';
const API_BASE = 'https://api.themoviedb.org/3';

// Este é o documento base para a requisição dos APIś. Utiilizá-lo como central permite fazer futuras alterações com maior facilidade

// - ORIGINAIS DA NETFLIX;
// - RECOMENDADOS (TRENDING)
// - EM ALTA (TOP RATED)
// - AÇÃO
// - COMÉDIA
// - TERROR
// - R0MANCE
// - DOCUMENTÁRIOS

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return[
            {
                slug: 'originals',
                title: 'Originais da Netflix',
                items: await basicFetch(`/discover/tv?width_network=213&language=pt-BR&api_key=${API_KEY}`)

            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?width_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?width_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?width_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?width_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?width_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ];
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};

        if(movieId){
            switch(type) {
                case 'movie' :
                    info =  await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                
                break;
                case 'tv':
                    info =  await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                
                break;
            }
        }
        return info;
    }
}
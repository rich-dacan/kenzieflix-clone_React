import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

export default () => {

    const [movieList, setMovieList] = useState([]); // ISSO É REACT PURO!!!
    const [featuredData, setFeaturedData] = useState([null]);
    const [blackHeader, setBlackHeader] = useState(false);

    useEffect(() => {
        const loadAll = async () => {
            // PEGANDO A LISTA TOTAL
            let list = await Tmdb.getHomeList();
            setMovieList(list);

            //PEGANDO O FEATURED
            let originals = list.filter(i=>i.slug === 'originals'); //FILTRANDO FILMES DE APENAS UMA LISTA, NESTE CASO ORIGINALS

            let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1 )); //GERANDO ALEATORIEDADE PRA ESCOLHER UM FILME EM DESTAQUE

            let chosen = originals[0].items.results[randomChosen];
            let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');

            setFeaturedData(chosenInfo);
        }

        loadAll();
    }, []);

    useEffect(()=>{
        const scrollListener = () => {
            if(window.scrollY > 10) {
                setBlackHeader(true);
            } else {
                setBlackHeader(false);
            }
        }

        window.addEventListener('scroll', scrollListener);

        return () => {
            window.removeEventListener('scroll', scrollListener);
        }

    }, []);
    return (
        //Ordem de execução: As listas*; Destaque; Header; Footer
            
        <div className="page">

            <Header black={blackHeader}/>

            {featuredData &&
                <FeaturedMovie item={featuredData} />
            }
            
            <section className="lists">
                {movieList.map((item, key)=>(
                    <MovieRow key={key} title={item.title} items={item.items} />
                ))}

            </section>
            
            <footer>
                Made for expansion <span role="img" aria-label="rocket">&#128640;</span>, by <a href="https://github.com/Rich-Dacan/" target="_blank"><img src="https://pngimg.com/uploads/github/github_PNG3.png" alt="instagram icon" /></a><br/>
                Direitos de imagem para Netflix!<br/>
                Dados originários  do site Themoviedb.org!
            </footer>

        </div>
    );
            
}
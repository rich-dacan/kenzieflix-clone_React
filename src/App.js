import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';

export default () => {

    const [movieList, setMovieList] = useState([]); // ISSO É REACT PURO!!!

    useEffect(() => {
        const loadAll = async () => {
            // PEGANDO A LISTA TOTAL
            let list = await Tmdb.getHomeList();
            setMovieList(list);
        }

        loadAll();
    }, []);
    return (
        <div>
            Olá, Mundo!
        </div>
    );

}
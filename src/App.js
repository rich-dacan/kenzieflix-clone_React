import React, { useEffect } from 'react';
import Tmdb from './Tmdb';

export default () => {

    useEffect(() => {
        const loadAll = async () => {
            // PEGANDO A LISTA TOTAL
            let list = await Tmdb.getHomeList();
            console.log(list);
        }

        loadAll();
    }, []);
    return (
        <div>
            Olá, Mundo!
        </div>
    );

}
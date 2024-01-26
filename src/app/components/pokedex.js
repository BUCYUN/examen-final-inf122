'use client'
import { useEffect, useState } from "react";

export default function pokedex () {
    const [pokemon, setPokemon] = useState (null);
    const [stats, setStats] = useState (null);
    const [type, setType] = useState (null);
    const [habilidad, setHabilidad] = useState (null)



    const url = 'https://pokeapi.co/api/v2/pokemon/240'

    useEffect(()=>{
        fetch (url)
            .then(res => res.json())
            .then(data => {
                setPokemon(data.sprites.front_default);
                setStats(data.stats);
                setType(data.types)
            }) 
    },[])

    console.log(pokemon)
    console.log(stats)

}


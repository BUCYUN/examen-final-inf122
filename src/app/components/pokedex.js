'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import style from './pokedex.module.css'

export default function pokedex () {
    const [name, setName] =useState ('')
    const [id, setId] = useState()
    const [pokemon, setPokemon] = useState ('/vercel.svg');
    const [weight, setWeight] = useState ()
    const [height, setheight] = useState ()
    const [type, setType] = useState (null);
    const [habilidad, setHabilidad] = useState ('')
    const [habilidad2, setHabilidad2] = useState ('')
    const [hp, setHp] = useState ('')
    const [attack, setAttack] = useState ('')
    const [defense, setDefense] = useState ('')
    const [speed, setSpeed] = useState ('')

    const [stats, setStats] = useState (null);



    const url = 'https://pokeapi.co/api/v2/pokemon/240'

    useEffect(()=>{
        fetch (url)
            .then(res => res.json())
            .then(data => {
                setName(data.name)
                setId (data.id)
                setPokemon(data.sprites.front_default);
                setType(data.types[0].type.name);
                setWeight(data.weight/10)
                setheight(data.height/10)
                setStats(data.abilities);
                setHabilidad(data.abilities[0].ability.name)
                setHabilidad2(data.abilities[1].ability.name)
                setHp(data.stats[0].base_stat)
                setAttack(data.stats[1].base_stat)
                setDefense(data.stats[2].base_stat)
                setSpeed(data.stats[5].base_stat)
            }) 
    },[])

    console.log(stats)
    return(
        <div className={style.box}>
            <div className={style.section1}>
                <h3 className={style.title}>
                    My Pokemon
                </h3>
                <h1 className={style.pokemon}>
                    {name}
                </h1>
                <p className={style.id}>
                    #{id}
                </p>
                <Image layout='responsive' priority="true" height={500} width={500} src={pokemon}/>
            </div>

            <div className={style.about}>
                <h3>About</h3>
                
                <div className={style.abouts}>
                    <p>Type</p><p>{type}</p>
                    <p>Height</p><p>{height} m</p>
                    <p>Weidht</p><p>{weight} kg</p>
                    <p>Abilities</p><p>{habilidad}, {habilidad2}</p>
                </div>
            </div>

            <div className={style.stat}>
                <h3>Stats</h3>
                <div className={style.stats}>
                    <p>HP</p><p>{hp}</p>
                    <p>Attack</p><p>{attack}</p>
                    <p>Defense</p><p>{defense}</p>
                    <p>Speed</p><p>{speed}</p>
                </div>
            </div>




        </div>
    );

}


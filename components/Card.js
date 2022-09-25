import Image from "next/image";
import Link from "next/link";

import style from '../styles/Card.module.css'

export default function Card({pokemon}){
    return(
<div className={style.card}>
<div className={style.circle1}></div>
    <div className={style.circle}></div>
<Image 
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
        width='120'
        height='120'
        alt="pokemons"
        />
        <p className={style.id}>#{pokemon.id}</p>
    <h3 className={style.name}>{pokemon.name}</h3>
    <Link  href={`/pokemon/${pokemon.id}`} ><a className={style.btn}>Detalhes</a></Link>
</div>
    )
}
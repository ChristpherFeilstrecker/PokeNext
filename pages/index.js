import Image from 'next/image';
import styles from '../styles/Home.module.css'

import Card from '../components/Card'

export async function getStaticProps(){
  const maxPokemons = 251;
  const api = 'https://pokeapi.co/api/v2/pokemon';

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  //adicionar id aos pokemons
  data.results.forEach((item,index)=>{
    item.id = index + 1;
  })

  return{
    props:{
      pokemons: data.results,
    },
  }
}

export default function Home({pokemons}) {

  /*
  const pokemonsList = pokemons && pokemons.map((poke)=>{
    return  <li key={poke.id}>{poke.name}</li>
  })
*/

  return (
    <>
    <div className={styles.title_container}>
      <h1 className={styles.title}>
        Poke<span>Next</span>
        </h1>
      <Image 
        src="/images/Pokeball.png"
        width='50'
        height='50'
        alt="pokemons"
        />
    </div>
      
      <div className={styles.pokemons_container}>
      {pokemons.map((pokemon)=>(
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
      </div>
    </>
  )
}

import Image from "next/image";
import styles from '../../styles/Pokemon.module.css'

export async function getStaticPaths() {
    const maxPokemons = 251;
    const api = 'https://pokeapi.co/api/v2/pokemon';

    const res = await fetch(`${api}/?limit=${maxPokemons}`);
    const data = await res.json();
    console.log("poke", data)
    //params
    const paths = data.results.map((pokemon, index) => {

        return {
            params: { id: (index + 1).toString() },
        }
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const id = context.params.id

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

    const data = await res.json()

    return {
        props: { pokemon: data },
    }
}


export default function Pokemon({ pokemon }) {

    return <div className={`${styles.pokemon_container} ${styles['back_' + pokemon.types[0].type.name]}`}>

        <h1 className={styles.title}>{pokemon.name}</h1>
        <Image
            src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
            width='120'
            height='120'
            alt="pokemons"
        />
        <div className={styles.details_container}>
            <div className={styles.collum}>
                <div className={styles.habilities_conttainer}>
                    <h4 className={styles.marg_bot}>Habilidades</h4>
                    {pokemon.abilities.map((item, index) => (
                        <div key={index}> {item.ability.name} </div>
                    ))}
                </div>

                <div className={styles.habilities_conttainer}>
                    <h4 className={styles.marg_bot}>Movimentos</h4>
                    <div> {pokemon.moves[3] && pokemon.moves[0].move.name} </div>
                    <div> {pokemon.moves[1] && pokemon.moves[1].move.name} </div>
                    <div> {pokemon.moves[2] && pokemon.moves[2].move.name} </div>
                    <div> {pokemon.moves[3] && pokemon.moves[3].move.name} </div>
                    <div> {pokemon.moves[4] && pokemon.moves[4].move.name} </div>
                    <div> {pokemon.moves[5] && pokemon.moves[5].move.name} </div>

                </div>
            </div>
            <div className={styles.collum_middle}>
                <div>

                </div>
                <div className={styles.types_container}>
                    <div >
                        {pokemon.types.map((item, index) => (
                            <span
                                key={index}
                                className={`${styles.type} ${styles['type_' + item.type.name]}`}
                            >
                                {item.type.name}
                            </span>
                        ))}
                    </div>

                </div>
                <div className={styles.data_container}>
                    <div className={styles.data_height}>
                        <h4>Altura:</h4>
                        <p>{pokemon.height * 10} cm</p>
                    </div>

                    <div className={styles.data_weight}>
                        <h4>Peso:</h4>
                        <p>{pokemon.weight / 10} kg</p>
                    </div>
                </div>
            </div>

            <div className={styles.collum}>
                <h4 className={styles.marg_bot}>Versões:</h4>
                <div className={styles.versions_wrap}>
                <div >
                    {pokemon.sprites.back_default
                        ? <div className={styles.versions_box}>
                            <h5>original</h5>
                            <div className={styles.versions_conttainer}>
                                
                            <Image
                                src={pokemon.sprites.front_default}
                                width='100'
                                height='100'
                                alt="pokemons"
                            />
                            <Image
                                src={pokemon.sprites.back_default}
                                width='100'
                                height='100'
                                alt="pokemons"
                            />
                            </div>
                        </div>
                        :
                        <div>
                        </div>}
                </div>

                <div>
                    {pokemon.sprites.back_shiny

                        ? <div className={styles.versions_box}>
                            <h5>Shiny</h5>
                            <div className={styles.versions_conttainer}>
                                
                            <Image
                                src={pokemon.sprites.front_shiny}
                                width='100'
                                height='100'
                                alt="pokemons"
                            />
                            <Image
                                src={pokemon.sprites.back_shiny}
                                width='100'
                                height='100'
                                alt="pokemons"
                            />
                            </div>
                        </div>
                        :
                        <div>
                        </div>}
                </div>

                <div>
                    {pokemon.sprites.back_female

                        ? <div className={styles.versions_box}>
                            <h5>Femea</h5>
                            <div className={styles.versions_conttainer}>
                                
                            <Image
                                src={pokemon.sprites.front_female}
                                width='100'
                                height='100'
                                alt="pokemons"
                            />
                            <Image
                                src={pokemon.sprites.back_female}
                                width='100'
                                height='100'
                                alt="pokemons"
                            />
                            </div>
                        </div>
                        :
                        <div>
                        </div>}
                </div>
                </div>
            </div>


        </div>
    </div>
}
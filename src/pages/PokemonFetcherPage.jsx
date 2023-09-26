import { useParams } from "react-router"


export default function PokemonFetcherPage(props){

    let {pokemonId} = useParams();

    return(
        <div>
            <h1>Gotta catch em all</h1>

            <h2>Finding Pokemon with ID of ... {pokemonId}</h2>
        </div>
    )
}
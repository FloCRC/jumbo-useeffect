import { useEffect, useState } from "react"
import CharacterDetail from "../CharacterDetail"
import HomeWold from "../HomeWorld"
import Film from "../Film"

function Characters() {

    const [characters, setCharacters] = useState([])
    const [nextPage, setNextPage] = useState('')
    const [prevPage, setPrevPage] = useState('')

    useEffect(() => {
        fetch('https://swapi.dev/api/people').then(res => res.json()).then(data => {
                setCharacters(data.results)
                setNextPage(data.next)
                setPrevPage(data.previous)
            })    
        },[])

    function clickNext() {
        fetch(nextPage).then(res => res.json()).then(data => {
            setCharacters(data.results)
            setNextPage(data.next)
            setPrevPage(data.previous)
        })
    }

    function clickPrev() {
        if(prevPage !== null){
            fetch(prevPage).then(res => res.json()).then(data => {
                setCharacters(data.results)
                setNextPage(data.next)
                setPrevPage(data.previous)
            }
        )}
    }

    return(
        <>
            <button onClick={clickPrev}>Prev</button>
            <button onClick={clickNext}>Next</button>
            {characters.map(character => {
                return <CharacterDetail key={character.name} name={character.name} height={character.height} hair={character.hair_color} birth={character.birth_year} homeWorld={<HomeWold homeW={character.homeworld}/>} films={<Film flms={character.films}/>} moreInfo={[character.mass,character.gender,character.skin_color]}/>}
            )}
            <button onClick={clickPrev}>Prev</button>
            <button onClick={clickNext}>Next</button>
        </>
    )
}

export default Characters
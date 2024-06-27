import { useState } from 'react'
import './CharacterDetail.css'

function CharacterDetail({name, height, hair, birth, homeWorld, films, moreInfo}) {

    const [infoVis, setInfoVis] = useState('lessInfo')

    function clickHandle() {
        if (infoVis === 'lessInfo') {
            setInfoVis('moreInfo')
        }
        else {
            setInfoVis('lessInfo')
        }
    }

    return (
        <>
            <h3>Character Details</h3>
            <p>Name: {name}</p>
            <p>Height: {height}</p>
            <p>Hair Colour: {hair}</p>
            <p>Birth Year: {birth}</p>
            <ul>Home World: {homeWorld}</ul>
            <ul>Films: {films}</ul>
            <button onClick={clickHandle}>More Info</button>
            <div className={infoVis}>
                <p>Mass:{moreInfo[0]}</p>
                <p>Gender: {moreInfo[1]}</p>
                <p>Skin Color: {moreInfo[2]}</p>
            </div>
        </>
    )
}

export default CharacterDetail
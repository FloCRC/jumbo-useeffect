import { useEffect, useState } from "react"

function HomeWold({homeW}) {

    const [homeWorlds, setHomeWorlds] = useState([]);

    useEffect(() => {
        fetch(homeW).then(res => res.json()).then(data => {
                setHomeWorlds(data)
            })    
        },[])

    return (
        <>
            <li>Name: {homeWorlds.name}</li>
            <li>Climate: {homeWorlds.climate}</li>
            <li>Population: {homeWorlds.population}</li>
        </>
    )
}

export default HomeWold
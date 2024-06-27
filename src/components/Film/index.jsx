import { useEffect, useState } from "react";

function Film({flms}) {

    const [filmDeets, setFilmDeets] = useState([])

    useEffect(() => {
        flms.forEach(film => {
            fetch(film).then(res => res.json()).then(data => {
               setFilmDeets(oldArray => [...oldArray, data])
            })
        })
    },[])

    return (
        <>
            {filmDeets.map(film => {
            return (
                    <div key={film.title}>
                        <ul>Film {(filmDeets.indexOf(film))+1}</ul>
                        <li>Title: {film.title}</li>
                        <li>Director: {film.director}</li>
                        <li>Release: {film.release_date}</li>
                    </div>
            )
            })}
        </>
    )
}

export default Film
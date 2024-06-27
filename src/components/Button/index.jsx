import { useEffect, useState } from "react"

function Button(next) {

    const [newData, setNewData] = useState([])
    const fetchData = next.next
    console.log(fetchData)

    useEffect(() => {
        fetch({fetchData}).then(res => res.json()).then(data => {
            setNewData(data)
        })
    })

    console.log(newData)

    return (
        <>
            <button>Next Please</button>
        </>
    )
}

export default Button
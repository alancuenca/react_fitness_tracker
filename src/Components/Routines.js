import { fetchRoutines } from '../api'
import { useState, useEffect } from 'react'

const Routines = () => {
    const [ routines, setRoutines ] = useState([]);

    const handleRoutines = async () => {
        try {   
            const fetchedRoutines = await fetchRoutines();
            console.log('fetchedRoutines: ', fetchedRoutines)
            setRoutines(fetchedRoutines)
        } catch(error) {
            console.error(error)
        }
    } 

    useEffect(() => {
        handleRoutines();
    }, [])

    return (
        <div className = "routines">
            <h1>Routines</h1>
                {routines.map((routine) => {
                    return (
                        <div key = {routine.id}>
                            <p>{routine.name}</p>
                        </div>
                    )
                })}
        </div>
    )
}

export default Routines;
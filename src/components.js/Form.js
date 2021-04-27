import React from 'react'
import {useState} from 'react'

const Form = (props) => {
    const [zip, setZip] = useState({})

    const handleSubmit = (event) => {
        console.log(handleSubmit)
    }

    const handleChange = (event) => {
        const name = event.target.placeholder
        console.log(handleChange)
        setZip({
            ...zip,
            [name]:event.target.value
        })
    }
    return (
        <input 
        onChange={handleChange}
        className = 'controlled-form'
        placeholder= 'Enter Zip Code'
        name = 'zips'/>

    )
}
export default Form
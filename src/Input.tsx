import {ChangeEvent, useState} from "react";


export function SearchField(){

    const [state, setSearch] = useState("")

    const ChangeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }
    const SearchHandler = () =>{

    }

    return (
        <div>
            <button onClick={SearchHandler}>Search</button>
            <input onChange={ChangeEventHandler} value={state}/>
        </div>
    )
}
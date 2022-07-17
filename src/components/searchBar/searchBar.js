import react from 'react'
import style from './searchBar.module.css'
import {FiNavigation} from 'react-icons/fi'

export default function SearchBar() {
    return (
        <div>
            <form>
                
                <input className={style["bar"]} placeholder='e.g. EC4R 3TE'/>
                <button className={style["search-btn"]}>Search</button>
            </form>

        </div>
    )
}
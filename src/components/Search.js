import searchicon from './images/searchicon.png'
import './Search.css'
import { useEffect, useState } from 'react';
function Search({showsearchresults}){
    const [searchterm,setSearchTerm]=useState('')
    const searchhandler=()=>{
        showsearchresults(searchterm)
    }
    useEffect(()=>{
        showsearchresults(searchterm)
    },[searchterm,showsearchresults])
    return(
        <div className='custom-search'>
            <input type="text" className='custom-search-input' placeholder='search book names' value={searchterm} onChange={(e)=>{setSearchTerm(e.target.value);searchhandler()}}></input>
            <img src={searchicon} width="15px" height="15px" className='custom-search-button' onClick={searchhandler} alt="search-con"></img>
        </div>
    )
}
export default Search;
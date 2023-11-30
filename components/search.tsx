import React from 'react';
import {useState} from 'react';
const SearchBar = () => {

    const [term,setTerm]=useState('');
    const handleSubmit=(event:any)=>{
event.preventDefault();
setTerm('');
    }
    const handleChange=(event:any)=>{
setTerm(event.target.value);
    }
    return (
        <div className="inline-flex rounded-md shadow">
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={term}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                    type="text"
                    placeholder="search"
                />
                </form>
            </div>
    );
}
export default SearchBar;
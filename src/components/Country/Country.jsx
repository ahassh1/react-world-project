import React from 'react';
import './Country.css'

const Country = ({country}) => {
     const handleVisited=()=>{
        console.log('visited')
     }
    
    return (
        <div className='country'>
            <h1>Name: {country?.name?.common}</h1>
            <img src={country.flags.png} alt="" />
            <p>Independent: {country.independent ? 'free' : 'not free'}</p>
            <h4>Populations: {country.population}</h4>
            <button onClick={ handleVisited}> visited</button>

        </div> 
    );
};

export default Country;
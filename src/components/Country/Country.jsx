import React, { useState } from 'react';
import './Country.css'

const Country = ({country,handleVisitedCountries}) => {
    const [visited,setVisited] =useState(false)
    console.log(handleVisitedCountries)

     const handleVisited=()=>{
        // console.log('visited')
        // setVisited(true);
        setVisited(!visited);
        handleVisitedCountries(country)
     }
    
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <h1>Name: {country?.name?.common}</h1>
            <img src={country.flags.png} alt="" />
            <p>Independent: {country.independent ? 'free' : 'not free'}</p>
            <h4>Populations: {country.population}</h4>
      
               <button className={visited ? 'btn-visited' : 'btn-not-visited' } onClick={ handleVisited}>{
                visited ? 'Visited':'Not Visited'
                }</button>

        </div> 
    );
};

export default Country;
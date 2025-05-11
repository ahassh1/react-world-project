import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
    const [visitedCountries,setVisitedCountries] =useState([])
    const [visitedFlag,setVisitedFlag] = useState([])

    // console.log(handleVisitedCountries) 
    const countries = use(countriesPromise);

     const handleVisitedFlag = (flag) =>{
        // console.log('flag is added ',flag)
        const newVisitedFlag =[...visitedFlag,flag];
        setVisitedFlag(newVisitedFlag)
     } 

    const handleVisitedCountries = (country) =>{
        console.log('country visited clicked to be added',country)
        const newVisitedCountries =[...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }
    // console.log(countries)

    return (
        <div>
            <h1>travling Countries: {countries.length}</h1>
            <h3>Travelled so far on go {visitedCountries.length}</h3>
            <div className='visited-flags-container'>
                {
                    visitedFlag.map((flag,index) => <img key={index} src={flag}></img>)
                }
            </div>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }
            </ol>
         <div className='countries'>
               {
                countries.map(country => <Country key={country.cca3}
                    handleVisitedCountries={handleVisitedCountries}

                    handleVisitedFlag = {handleVisitedFlag}
                    country={country}></Country>)
            }
         </div>
        </div>
    );
};

export default Countries;
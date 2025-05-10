import React from 'react';

const Country = ({country}) => {
    console.log(country)
    return (
        <div>
            <h1>Name: {country?.name?.common}</h1>
            <img src={country.flags.png} alt="" />
            <p>Independent: {country.independent ? 'free' : 'not free'}</p>
            <h4>Populations: {country.population}</h4>

        </div>
    );
};

export default Country;
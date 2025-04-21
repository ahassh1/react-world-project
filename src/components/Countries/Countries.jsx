import React, { use } from 'react';

const Countries = ({countriesPromise}) => {
    const countries = use(countriesPromise);
    console.log(countries)

    return (
        <div>
            <h1>travling Countries: {countries.length}</h1>
            {
                countries.map(country => <Country></Country>)
            }
        </div>
    );
};

export default Countries;
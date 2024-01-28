import { useState } from 'react';
import './Country.css'
import CountryDetail from '../CountryDetail/CountryDetail';

const Country = ({ county: country, handleVisitedCountry, handleVisitedFlags }) => {
    const { name, flags, population, area, cca3 } = country;

    const [Visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!Visited)
    }

    // const passWithParams = () => handleVisitedCountry(country);



    return (
        <div className={`country ${Visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{ color: Visited ? 'Purple' : 'black' }}>{name.common}</h3>
            <img src={flags?.png} alt="" />
            <p>Population: {population}</p>
            <p>area: {area}</p>
            <p><small>Code:{cca3}</small></p>
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <br />
            <button onClick={handleVisited}>{Visited ? 'Visited' : 'Going'}</button>
            {Visited ? 'I have visited this country.' : 'I want to visit'}
            <hr />
            <CountryDetail
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
            ></CountryDetail>
        </div >
    );
};

export default Country;
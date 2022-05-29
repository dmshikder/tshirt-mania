import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const [ornament, house]= useContext(RingContext);
    return (
        <div>
            <h3>special</h3>
            <p>Gift: {ornament}</p>
            <p>{house}</p>
        </div>
    );
};

export default Special;
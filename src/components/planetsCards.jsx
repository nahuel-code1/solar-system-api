import React from 'react'
import PlanetsData from "./planetsData";

export default function PlanetsCards ({planetsData}) {
    const { name, image} = planetsData;
    
    return (
        <div>
            <img src={image} alt={name} />

            <p>
                {name}
            </p>

            <PlanetsData planetsData={planetsData} />

        </div>
    )
}

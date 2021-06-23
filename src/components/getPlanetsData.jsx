import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PlanetsCards from "./planetsCards";
import { getAllPlanetsData } from "../services/getApiData";

export default function GetPlanetsData () {
    const [ planets, setPlanets ] = useState("");
    
    useEffect(() => {
        getAllPlanetsData()
            .then(resp => {
                console.log(resp.data);
                setPlanets(resp.data);
            })
            .catch(error => console.log(error));
    }, [])

    return (
        <div>
             <Link to="/">
                Back Home    
            </Link>
            {planets &&     
                    planets.map((element) => {
                        return (
                            <PlanetsCards planetsData={element} key={element.id} />
                        )
                    })           
                }
        </div>
    )
}

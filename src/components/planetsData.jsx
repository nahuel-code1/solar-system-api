import React from 'react'

export default function PlanetsData ({planetsData}) {
    const { Diameter, satellites, orbitalSpeed, radius, orbitalPeriod, rotationDuration, sunDistance, temperature } = planetsData.features;

    return (
        <div>
            {orbitalPeriod && 
                orbitalPeriod.map((element, i ) => {
                    return (
                        <p key={i}>
                            Periodo Orbital: {element}
                        </p>
                    )
                })
            }

            {satellites.number > 0 &&
                satellites.names.map((element, i) => {
                    return (
                        <p key={element + i}>
                            Satellites: {element}
                        </p>
                    )
                })
            }

            <p>
                Diameter: {Diameter}
            </p>

            <p>
                Orbital Speed: {orbitalSpeed}
            </p>

            <p>
                Radius: {radius}
            </p>

            <p>
                Temperature: {temperature}
            </p>

            <p>
                Sun Distance: {sunDistance}
            </p>

            <p>
                Duration of Rotation: {rotationDuration}
            </p>
        </div>
    )
}

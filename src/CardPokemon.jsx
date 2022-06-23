import React from 'react'

const CardPokemon = ({id, image, name, type, abilities }) => {

    return (
        
        <div className='Container'>
            <div className='row'>
                <div className='col'>
                        {
                            <div className='fon'>
                                <br /><br />
                                <br /><br />
                                <br />
                                <img src={image} alt={name} />
                            </div>
                        }
                </div>
                <div className='col'>
                        {
                            <div>
                                <div className="number">{id}</div>
                                <br />
                                <h3>{name}</h3>
                                <small>Tipo: {type}</small>
                                <div className='abil'>
                                    {
                                        abilities.map((res, index)=>(
                                        <li key={index}>{res.ability.name}</li>
                                        ))
                                    }
                                </div>
                            </div>
                        }
                </div>
            </div>
        </div>
    )
}

export default CardPokemon
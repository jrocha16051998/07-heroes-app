import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
//import { heroes } from '../../data/heroes'
import "./hero.css"

export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters}) => {
    
    const [value, setValue] = useState(false)
    
    const navigate = useNavigate();
   
    const hanndleMouseIn =()=>{
        setValue(true)
       
    }
    const hanndleMouseOut =()=>{
        setValue(false)
        
        
    }
   
  return (
    <div 
        className='col-3 align-items-center'
        onClick={()=> navigate(`/hero/${id}`)}
        >

        <div className={`cardPersonalizada ${value && "animate__animated animate__pulse"}    `} >
            

            <div className='row no-gutters'>
                <img 
                    src={`/assets/${id}.jpg`} 
                    className={`card-img`} 
                    alt={superhero}
                    onMouseEnter={hanndleMouseIn}
                    onMouseLeave={hanndleMouseOut}
                    >
                    
                        
                    </img>
            </div>
            <div className='col-8 pieCard'>
                <div className='card-body'>
                    <h5 className='card-title'>{ superhero }</h5>
                    <p className='card-text'>{ alter_ego }</p>
                    
                    <Link to={`/hero/${id}`} > Más... </Link>
                    
                </div>
            </div>
        </div>
    </div>
    
  )
}

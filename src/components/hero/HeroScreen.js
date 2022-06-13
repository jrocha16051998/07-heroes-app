import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroesById';


export const HeroScreen = () => {
  
  const navegar = useNavigate();
  const {heroeId} = useParams();
  
  const hero = getHeroesById(heroeId) ;
  
  
  
  if(!hero){
    return <Navigate to="/dc" />
  }

  

  const handleBack = ()=>{
    navegar(-1)
  }

  

  const {
    id, 
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = hero;

    
  return (
    <div className='row mt-5 '>
        <div className='col-4'>
            <img 
              src={`/assets/${id}.jpg`} 
              alt={hero.alter_ego}
              className="img-fluid animate__animated animate__fadeInLeft"
              ></img>

        </div>
        <div className='col-8'>
            <h3>{superhero}</h3>
            <ul className='list-group'>
            <li className='list-group-item'><b>Alter ego: </b>{alter_ego}</li>
            <li className='list-group-item'><b>Publisher: </b>{publisher}</li>
            <li className='list-group-item'><b>First appearance: </b>{first_appearance}</li>
            <li className='list-group-item'><b>Characters: </b>{characters}</li>

            </ul>

            <button className='btn btn-primary' onClick={handleBack}>Back</button>
        </div>
    
    
    </div>
    
  )
}

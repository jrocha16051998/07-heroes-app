import React from 'react'

import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'

export const HeroList = ( {publisher}) => {

   const heroes = getHeroesByPublisher(publisher)
  return (
    <>
        <h1>Hero list - {publisher}</h1>
        <hr></hr>

        <ul>
            {
            heroes.map( hero => (
                <li key={ hero.id }>
                     { hero.superhero }
                </li>
            ))
            }
        </ul>
    </>
  )
}

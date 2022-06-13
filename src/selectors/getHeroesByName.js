import { heroes } from "../data/heroes"


export const getHerosByName = (search) =>{

    search = search.toLowerCase();

    return heroes.filter(hero =>hero.superhero.toLowerCase().includes(search)); 
}
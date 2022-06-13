import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { getHerosByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";
import queryString from 'query-string'; 

export const SearchScreen = () => {

  const navigate = useNavigate ();
  const location = useLocation();

  const { q = ''} = queryString.parse( location.search);
  const [value, handleInputChange] = useForm({searchText:q});

  const {searchText} = value;

   const herosFilted = getHerosByName(searchText);

  const handleSearch =(e)=>{
    
    e.preventDefault();
    
    if(searchText.trim().length < 1) return;

    navigate(`?q=${ searchText }`);
    
    console.log(q)
     
  }
    
   


    return (
      <div>
          <h1>Search:</h1>
          <hr />

          <div className="row">
              <div className="col-4">
                <h4>buscar</h4>
                <hr />
                <form onSubmit={handleSearch}>
                  <input
                    type="text"
                    placeholder="Buscar un heroe"
                    className="form-control"
                    name="searchText"
                    autoComplete="off"
                    value={searchText}
                    onChange={handleInputChange}
                  ></input>
                  <button
                      type="submit"
                      className="btn btn-primary"
                      
                  >
                    Buscar</button>
                </form>

              </div>
          </div>
          <div  className="row rows-cols-1 rows-cols-md-3">
          <h4>Resultados</h4>
          <hr></hr>
          <div className="row">

            {
            herosFilted.map( hero =>(
              <HeroCard key={hero.id} {...hero} />
            )
             
          )
          }
          </div>
          
            
            
            
          </div>
  
  
      </div>
    )
  }
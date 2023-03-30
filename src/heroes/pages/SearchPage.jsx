import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import queryString from 'query-string';
import { getHeroesByName } from '../helpers';
import { HeroCard } from '../components/HeroCard';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q ='' } = queryString.parse( location.search );

  const heroes = getHeroesByName( q );

  const { searchText, onInputChange } = useForm({
    searchText: q
  });



  const onSearchSubmit = (e) => {
    e.preventDefault();
    if( searchText.trim().length <= 1 ) return;

    navigate(`?q=${ searchText }`)
  }


  return (
    <>
      <h1>Buscar</h1>
      <hr />
      
      <div className="row">
        <div className="col-5">
          <h4>Buscando</h4>
          <hr />
          <form onSubmit={ onSearchSubmit }>
            <input 
              type="text" 
              placeholder="Busca tu Héroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
              />
            <button className="btn btn-outline-primary mt-1">
              Buscar
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />
          <div className="alert alert-primary">
            Busca un Héroe
          </div>
          <div className="alert alert-danger">
            No hay resultados con <b>{ q }</b>
          </div>
          <div className='row rows-cols-1 w-100'>
            {
              heroes.map( hero => 
                <HeroCard key={hero.id} {...hero} />
              )
            }
          </div>
          
        </div>
      </div>
    </>
  )
}

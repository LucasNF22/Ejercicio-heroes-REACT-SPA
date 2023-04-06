import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import queryString from 'query-string';
import { getHeroesByName } from '../helpers';
import { HeroCard } from '../components/HeroCard';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  
  const { q ='' } = queryString.parse( location.search );
  // console.log(queryString.parse(location.search));
  const heroes = getHeroesByName( q );

  const showSearch = ( q.length === 0 );
  const showError = ( q.length > 0 ) && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q
  });



  const onSearchSubmit = (e) => {
    e.preventDefault();
    // if( searchText.trim().length <= 1 ) return;

    navigate(`?q=${ searchText }`)
  }


  return (
    <>
     <div className='animate__animated animate__fadeIn'>

      <h1>Encuentra tu Héroe</h1>
      <hr />
      
      <div className="container ">
        <div className="col-12">         
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
            <button className="btn btn-outline-primary mt-2
            ">
              Encuentra tu Héroe
            </button>
          </form>
        </div>
        <div className="col-12">
          <h4 className='mt-4'>Resultados</h4>
          <hr />
          
          <div 
            className="alert alert-primary animate__animated animate__headShake"
            style={{ display: showSearch ? '' : 'none' }}
            aria-label='alert-search'
          >
            Busca un Héroe
          </div>
          
          <div 
            className="alert alert-danger animate__animated animate__headShake"
            style= {{ display: showError ? '' : 'none' }}
            aria-label='alert-results'
          >
            No hay resultados con <b>{ q }</b>
          </div>
          
          <div className='row rows-cols-1 row-cols-md-3 g-3 mt-1'>
            {
              heroes.map( hero => 
                <HeroCard key={hero.id} {...hero} />
                )
              }

          </div>
          
          
        </div>
      </div>
              </div>
    </>
  )
}

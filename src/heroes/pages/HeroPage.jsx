import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";

export const HeroPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();  
  const hero = useMemo( () => getHeroById( id ), [ id ] );

  const onNavigateBack = () => {
    navigate( -1 )
  }

  if( !hero ) {
    return <Navigate to="/marvel" /> 
  }

  return (
    // <div className="row mt-5">
    //   <div className="col-4">
    //     <img 
    //       src={`/assets/heroes/${ id }.jpg`} 
    //       alt={ hero.superhero } 
    //       className="img-thumbnail"
    //     />
    //   </div>
    //   <div  className="col-8">
    //     <h3>{ hero.superhero }</h3>

    //   </div>
    // </div>
    <article className="postcard img-thumbnail justify-self-center">
				
        <img className="postcard__img img-thumbnail" src={`/assets/heroes/${ id }.jpg`} alt="Image Title" />
				
        <div className="postcard__text">
				
          <h1 className="postcard__title">{ hero.superhero }</h1>
          
          <div className="small">				
            <div className="list-group-item mb-2"><b>Alter ego: </b>{ hero.alter_ego }</div>
            <div className="list-group-item mb-2"><b>Publisher: </b>{ hero.publisher }</div>
            <div className="list-group-item mb-2"><b>First appearance: </b>{ hero.first_appearance }</div>  	
          </div>

          <div className="postcard__bar"></div>
          <h5 className="mt-2">Characters:</h5>
          <p className="postcard__preview-txt">
            { hero.characters }
          </p>
          
          <button 
            className="btn btn-outline-primary"
            onClick={ onNavigateBack }
          >
            Volver
          </button>

			</div>
		</article>
  )
}

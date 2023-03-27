import React from "react";
import { Link } from "react-router-dom";

const CharactersByHero = ({ alter_ego, characters }) => {
  return alter_ego !== characters ? <p>{characters}</p> : <></>;
};

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroUrlImage = `/assets/heroes/${id}.jpg`;

  return (
    // <div classNameName='col' >
    //     <div classNameName='card' >
    //         <div classNameName='row no-gutters' >
    //           <div classNameName='col-4'>
    //             <img src={ heroUrlImage } alt={ superhero } classNameName='card-img' />
    //           </div>
    //           <div classNameName='col-8' >
    //             <div classNameName='card-body' >
    //                 <h5 classNameName='card-title' >{ superhero }</h5>
    //                 <p classNameName='card-text' >{ alter_ego }</p>
    //                 {/* {
    //                   ( alter_ego !== characters ) && ( <p>{ characters }</p> )
    //                 }    */}
    //                 <CharactersByHero characters={ characters } alter_ego={ alter_ego } />
    //                 <p classNameName="card text">
    //                   <small classNameName='text-muted'>{ first_appearance }</small>
    //                 </p>
    //                 <Link to={`/hero/${ id }`} >
    //                   mas...
    //                 </Link>
    //             </div>
    //           </div>
    //         </div>
    //     </div>
    // </div>

    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
      <div
        className="card text-white card-has-bg click-col"
        
      >
        <img src={heroUrlImage} alt={superhero} className="card-img" />
        
        <div className="card-img-overlay d-flex flex-column">
          <div className="card-body">
            <small className="card-meta mb-2">Thought Leadership</small>
            <h4 className="card-title mt-0 ">
              <a className="text-white" herf="#">
                Goverment Lorem Ipsum Sit Amet Consectetur dipisi?
              </a>
            </h4>
            <small>
              <i className="far fa-clock"></i> October 15, 2020
            </small>
          </div>
          <div className="card-footer">
            <div className="media">
              <div className="media-body">
                <h6 className="my-0 text-white d-block">Oz Coruhlu</h6>
                <small>Director of UI/UX</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import './stackedCardItem.css';

function stackedCardItem (props) {
  return (
     <li className="cards__item">
      <figure className="card">
        <header className="card-header">
	  <p>{props.headline}</p>
	  <h3>{props.skill}</h3>
        </header>
        <div className="card-author" />
	<i class="skill-image">
            <img src={props.image} alt=""/>
        </i>
          <svg class="half-circle" viewBox="0 0 106 57">
            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4" />
          </svg>
        <div className="author-name">
          {props.author}
        </div>
        <div className="tags">
          <i>{props.tags}</i>
        </div>
      </figure>
    </li> 
  );
}

export default stackedCardItem;

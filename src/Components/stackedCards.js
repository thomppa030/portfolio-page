import React from 'react';
import './stackedCards.css';
import UnityImg from '../images/unity.png';
import UnrealImg from '../images/unreal.png';
import CppImg from '../images/cpp.png';
import CImg from '../images/c.png';
import CSharpImg from '../images/csharp.png';
import ReactImg from '../images/react.png';
import PyImg from '../images/python.png';
import Card from './stackedCardItem';

function stackedCards () {
  return (
    <div className="card-list">
      <div className="cards_container">
        <div className="cards_wrapper"></div>
          <ul className='cards__items'>
            <Card
              skill="Unity3D"
              image={UnityImg}
              author="Kay Priesnitz"
              tags="Engine"
            />
            <Card
              skill="Unreal"
              image={UnrealImg}
              author="Kay Priesnitz"
              tags="Engine"
            />
          </ul>
          <ul className='cards__items'>
            <Card
              skill="C++"
              image={CppImg}
              author="Kay Priesnitz"
              tags="programming"
            />
            <Card
              skill="C"
              image={CImg}
              author="Kay Priesnitz"
              tags="programming"
            />
            <Card
              skill="C#"
              image={CSharpImg}
              author="Kay Priesnitz"
              tags="programming"
            />
            <Card
              skill="Python"
              image={PyImg}
              author="Kay Priesnitz"
              tags="programming"
            />
            <Card
              skill="React"
              image={ReactImg}
              author="Kay Priesnitz"
              tags="programming"
            />
          </ul>
      </div>
    </div>
  )
}
export default stackedCards;

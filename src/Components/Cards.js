import React from 'react'
import './Cards.css'
import HaviImage from '../images/HaviEngine1.PNG'
import DueppelImage from '../images/Inside_Dueppel2.PNG'
import ProtoImage from '../images/Protometheus1.png'
import MooseCruiseImage from '../images/MooseCruise1.png'
import CardItem from './CardItem'

function Card() {
	return (
		<div className='cards'>
			<h1>Check out Havi Engine!</h1>
			<h4>please</h4>
			<div className="cards__container">
				<div className="cards__wrapper"></div>
				<ul className="cards__items">
					<CardItem 
					src={HaviImage}
					text="Explore the might of Vulkan Rendering!"
					label='Engine Development'
					path='havi-engine'
					/>
					<CardItem 
					src={DueppelImage}
					text='Dueppel VR : An interactive history tour!'
					label='VR'
					path='/havi-engine' 
					/>
				</ul>
				<ul className="cards__items">
					<CardItem 
					src={ProtoImage}
					text='Protometheus : Awake the ancient machinery!'
					label='3D Platformer'
					path='havi-engine'
					/>
					<CardItem 
					src={MooseCruiseImage}
					text="Moose Cruise! Elche auf großer Fa(h)rt!"
					label='Arduino'
					path='/havi-engine' 
					/>
					<CardItem 
					src={MooseCruiseImage}
					text="Moose Cruise! Elche auf großer Fa(h)rt!"
					label='Arduino'
					path='/havi-engine' 
					/>
				</ul>
			</div>			
		</div>
	)
}

export default Card

import React from 'react';

import PortfolioItem from './Portfolio-menu';

import './directory.styles.scss';


       const sections = [
          {
            title: 'ex1',
            imageUrl: 'https://i.imgur.com/WTmppKM.png',
            id: 1,
            summary: 'Crown Clothing',
            subtitle: 'e-commerce platform with full stripe integration and NoSQL (firebase) database with user sign in and google oAuth.  Latest react features (inc hooks), Redux,, firebase, SCSS, Thunk'

          },
          {
            title: 'ex2',
            imageUrl: 'https://i.imgur.com/USYltDH.png',
            id: 2,
            summary: 'Smart Brain',
            subtitle: 'Facial recognition web app. Client side vision api integration. Backend node/express server withSQL database for user authentication and client tracking site statistics.'
          },
          {
            title: 'ex2',
            imageUrl: 'https://i.imgur.com/9y3DClh.png',
            id: 4,
            summary: 'Robofriends',
            subtitle: 'Webapp with searchable and filterable contact cards featuring API generated Robots as avatars'
          }
   
        ];

const Directory = () => {
  return (
    <div className="Portfolio-menu">
      {sections.map(({ imageUrl, id, size, summary, subtitle }) => (
        <PortfolioItem 
          key={id}
          imageUrl={imageUrl}
          size={size}
          summary={summary}
          subtitle={subtitle}
          />))}
          
          </div>
          );
        };

    
  
  export default Directory;
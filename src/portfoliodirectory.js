import React from 'react';

import PortfolioItem from './Portfolio-menu';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
      super();
  
      this.state = {
        sections: [
          {
            title: 'ex1',
            imageUrl: 'https://i.imgur.com/OTzULyY.jpeg',
            id: 1,
            summary: 'test123',
            subtitle: 'lorem memes of the dank'
          },
          {
            title: 'ex2',
            imageUrl: 'https://i.imgur.com/LhwHtxm.jpg',
            id: 2,
            summary: 'test124',
            subtitle: 'lorem memes of the dank'
          },
          {
            title: 'ex2',
            imageUrl: 'https://i.imgur.com/LhwHtxm.jpg',
            id: 4,
            summary: 'test125',
            subtitle: 'lorem memes of the dank'
          },
          {
            title: 'ex2',
            imageUrl: 'https://i.imgur.com/LhwHtxm.jpg',
            id: 5,
            summary: 'test126',
            subtitle: 'lorem memes of the dank'
          }
        ]
      };
    }
  
    render() {
      return (
        <div className='Portfolio-menu'>
          {this.state.sections.map(({ imageUrl, id, size, summary, subtitle }) => (
            <PortfolioItem key={id} imageUrl={imageUrl} size={size} summary={summary} subtitle={subtitle} />
          ))}
        </div>
        
      );

    }
  }

    
  
  export default Directory;
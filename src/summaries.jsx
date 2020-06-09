import React from 'react';

import SummaryItem from './Summary-Data';

import './Summaries.styles.scss';

class Summaries extends React.Component {
    constructor() {
      super();
  
      this.state = {
        sections: [
          {
            title: 'summary 1',
            description: 'lorem impsum blah blah lorem impsum blah blah lorem impsum blah blah',
            id: 1
          },
          {
            title: 'summary 2',
            description: 'lorem impsum blah blah lorem impsum blah blah lorem impsum blah blah',
            id: 2
          },
          {
            title: 'summary 3',
            description: 'lorem impsum blah blah lorem impsum blah blah lorem impsum blah blah',
            id: 3
          },
          {
            title: 'summary 4',
            description: 'lorem impsum blah blah lorem impsum blah blah lorem impsum blah blah',
            id: 4
          }
        ]
      };
    }
  
    render() {
      return (
        <div className='Summary-Data'>
          {this.state.sections.map(({ title, description, id }) => (
            <SummaryItem key={id} title={title} description={description} />
          ))}
        </div>
      );
    }
  }
  
  export default Summaries;
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Context from '../Context'
import './Types.css';

class Types extends Component {
  static contextType = Context
  render() {
    const { types } = this.context
    return (
      <div className="types">
        <h2>Types of Bikes</h2>
        <ul>
          {types.map(type =>
            <li key={type.id}>
              <Link to={`/types/${type.id}`}>
                {type.bike_name}
              </Link>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Types;
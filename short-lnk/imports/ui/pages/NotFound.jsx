import React, { Component } from 'react';

import './NotFound.scss';

class NotFound extends Component {
    render() { 
        return (
            <div>
              <section className="error-container">
                <span><span>4</span></span>
                <span>0</span>
                <span><span>4</span></span>
              </section>
              <section className="not-found">
                <span className="not">Not </span>
                <span className="found">Found!</span>
              </section>
            </div>
        );
    }
}

export default NotFound;

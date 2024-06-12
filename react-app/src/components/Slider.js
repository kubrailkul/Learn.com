import React, { Component } from 'react';
import AppContext  from '../context'; // AppContext'i doğru şekilde içe aktardığınızdan emin olun

class Slider extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {
          value => {
            const { slider } = value;
            return (
                <div className='center'>

             
              <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  {slider.map((item, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                      <img className="d-block w-100" src={item.path} alt={`Slide ${index + 1}`} />
                    </div>
                  ))}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
              </div>
            );
          }
        }
      </AppContext.Consumer>
    );
  }
}

export default Slider;

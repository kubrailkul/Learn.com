import React, { Component } from 'react';
import AppContext  from '../context'; 
import courseImage from '../images/course.jpg';
import uniqid from 'uniqid';
import axios from 'axios'

class Basket extends Component {


  buy=async(basket,dispatch,e)=>{
   
    for (let element of basket) {
      const model = {
        userId: 1,
        courseId: element.id, // courseId'yi basket öğesinden alıyoruz
        courseName:element.name,
        coursePrice:element.price,
        id: uniqid(),
      };
    const response=await axios.post("http://localhost:3004/userCourses",model);
    dispatch({type:"BUY_BASKET",payload:model})
    }
     window.location.href = '/HomePage';
     }


  render() {
    return (
      <AppContext.Consumer>
        {
          value => {
            const { basket,dispatch } = value;
            return (
              <div className="container mt-5">
                <div className="row">
                  <div className='col-md-8 mt-5'>
                            <table className="table table-striped">
                <tbody>
                {

                 basket.length>0?

                 
                  basket.map((item, index) => (
                   <tr>
      <td>     <img className="card-img-top" src={courseImage} alt="Card image cap" style={{ width: '10rem' }}></img></td>
      <td>{item.name}</td>
      <td>{item.price} $</td>
      <td><button type="button" className="btn btn-outline-danger"  onClick={() => dispatch({ type: 'DELETE_BASKET', payload: item })} >Remove</button></td>
    </tr>                   
                  ))
                :null

                  
                }
  </tbody>
                </table>
                  </div>



{     basket.length>0?
  
                  <div className='col-md-4 mt-5'>
                  <div className="card text-center" >
  <div className="card-body">
    <h5 className="card-title">Basket Information</h5>
    <ul className="list-group">
  <li className="list-group-item"> Total Basket Price: {basket.length>0?basket.reduce((total, item) => total + item.price, 0):0}  $</li>
</ul>
    <a href="#" className="btn btn-primary mt-3" onClick={this.buy.bind(this,basket,dispatch)}>Buy</a>
  </div>
</div>
                  </div>

                  :
                  <div class="alert alert-warning text-center" role="alert">
   YOUR BASKET IS EMPTY
   </div>
}


                </div>
        
          
              </div>
            );
          }
        }
      </AppContext.Consumer>
    );
  }
}

export default Basket;

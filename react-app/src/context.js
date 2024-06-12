import React, { Component } from 'react';
import axios from 'axios';
import Swal from  'sweetalert2';

const AppContext = React.createContext();

const reducer = (state, action) => {

  debugger



    switch (action.type) {
        case "DELETE_BASKET":
            return {
                ...state,
                basket: state.basket.filter(basket => basket.id !== action.payload.id )
            };
        case "ADD_basket":
            
        if(state.basket?.length>0){
          if(state.basket.filter(x =>  x.id==action.payload.id ).length>0){
            Swal.fire({
              title: "Warning",
              text: "Added to Basket Before",
              icon: "warning"
            });

            debugger
         
            return;
          }
        }
  

        Swal.fire({
          text: "Added to Basket",
          icon: "success"
        });
            return {
                ...state,
                basket: [...state.basket, action.payload]
                
            };

       case "BUY_BASKET":
        if(state.paidCourses?.length>0){
            if(state.paidCourses.filter(x =>  x.id==action.payload.id ).length>0){
              Swal.fire({
                title: "Warning",
                text: "BOUGHT Before",
                icon: "warning"
              });
  
              debugger
           
              return;
            }
          }
    
  
          Swal.fire({
            text: "Succesfull!",
            icon: "success"
          });

            
        default:
            return state;
    }
};

export class AppProvider extends Component {
    state = {
        courses: [],
        basket:[],
        slider:[],
        paidCourses:[],
        userCourses:[],
        authentication:false,
        dispatch: action => {
            this.setState(state => reducer(state, action));
        }
    };

    componentDidMount = async () => {
        const response = await axios.get("http://localhost:3004/courses");
        const responseSlide = await axios.get("http://localhost:3004/slider");
        const responseUserCourses = await axios.get("http://localhost:3004/userCourses");
        this.setState({
            courses: response.data,
            slider:responseSlide.data,
            userCourses:responseUserCourses.data,
            authentication:false
        });
    };

    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export const AppConsumer = AppContext.Consumer;

export default AppContext; // Ensure AppContext is exported

import React, { Component } from 'react';
import axios from 'axios';
import courseImage from '../images/course.jpg';

export default class MyCourses extends Component {
  state = {
    paidCourses: [],
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get('http://localhost:3004/userCourses');
      this.setState({ paidCourses: response.data });
    } catch (error) {
      console.error('Error fetching the courses:', error);
    }
  };

  render() {
    const { paidCourses } = this.state;



    return (
      
      <div className="courses-container center">
  <h2>My Courses</h2>
        <div className="courses">
          {
            paidCourses.length>0?
            paidCourses.map((course) => (
            <div className="ml-2 mt-2" key={course.id}>
              <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src={courseImage} alt="Card cap" />
                <div className="card-body">
                  <h3>{course.courseName}</h3>
                  <p>Price: {course.coursePrice} $</p>
                </div>
              </div>
            </div>
          ))

          : <div class="alert alert-warning text-center" role="alert">
            NO COURSES AVAILABLE
          </div>
          
          }
        </div>
      </div>
    );
  }
}

import React, { useState, useContext, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import '../App.css';
import AppContext from '../context'; // Import the context
import AppConsumer from '../context'
import courseImage from '../images/course.jpg';
import Slider from "../components/Slider"
const itemsPerPage = 5;

const HomePage = () => {
  const { courses, dispatch ,userCourses} = useContext(AppContext); // Use context here
  debugger;
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
    
  };

  const offset = currentPage * itemsPerPage;
  const currentPageData = courses.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(courses.length / itemsPerPage);

  return (
    <div>
    <Slider></Slider>
    <div className="courses-container center mt-2">
     <div className="courses">
      <AppConsumer>
      {context => {
        const { courses, dispatch } = context;

        debugger;
        const offset = currentPage * itemsPerPage;
        const currentPageData = courses.slice(offset, offset + itemsPerPage);
        const pageCount = Math.ceil(courses.length / itemsPerPage);
        
        console.log(courseImage)
        return (
          <div className="courses-container center">
            <div className="courses">
              {currentPageData.map(course => (
                <div className='ml-2 mt-2'>
                <div className="card" key={course.id} style={{ width: '18rem' }}>
                  <img className="card-img-top" src={courseImage} alt="Card image cap"></img>
                  <div className="card-body">
                    <h3>{course.name}</h3>
                    <p>Price: {course.price} $</p>
                    <p>Level: {course.level}</p>
                    {
                     userCourses.filter(x=>x.courseId==course.id).length>0?<button type="button" class="btn btn-secondary disabled">Purchased</button>:
                     <button onClick={() => dispatch({ type: 'ADD_basket', payload: course })} className="btn btn-primary">
                      Add to basket
                     </button>
                     
                   
                    }
           
                  </div>
                </div>
                </div>
              ))}
            </div>
            <ReactPaginate
              previousLabel={'previous'}
              nextLabel={'next'}
              breakLabel={'...'}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={2}
              onPageChange={handlePageClick}
              containerClassName={'pagination'}
              activeClassName={'active'}
            />
          </div>
        );
      }}
    </AppConsumer>


      </div>

    </div>
    </div>
  );
}

export default HomePage;

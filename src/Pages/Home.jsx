import React from 'react'
import { Link } from 'react-router'

const Home = ({isLoggedIn}) => {
  return (
    <div>
      <div>
      <div className='text-white flex justify-center items-center mt-50 text-2xl'>Welcome To Studynotion</div>
        <Link to='/signup'>
          <button>Become an Instructor</button>
        </Link>
      </div>

      <div></div>

      <div>
        <Link to='/signup'>
          <button>Learn More</button>
        </Link>

        <Link to='/login'>
          <button>Book a Demo</button>
        </Link>
      </div>
    </div>
  )
}

export default Home

import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import Footer from './Footer'


function About() {
  return (
    
    <div> <Nav/>
          <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-4">Welcome to Nyumbani</h1>
        <p className="text-lg mb-4">
          At LuxeHomesFinder, we are passionate about helping you discover the
          extraordinary in the world of luxury real estate. Our website is
          dedicated to curating the finest selection of luxury homes, estates,
          and properties from around the globe.
        </p>
        <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
        <p className="text-lg mb-4">
          Our mission is to provide a seamless and inspiring platform for
          individuals with discerning tastes who are in pursuit of exceptional
          living spaces. We believe that a home is more than just a place; it's
          an expression of your unique lifestyle, taste, and aspirations. We're
          here to help you find the perfect residence that resonates with your
          vision of luxury.
        </p>
     
        <h2 className="text-xl font-semibold mb-2">Connect with Us</h2>
        <p className="text-lg mb-4">
          We value your feedback and are here to answer any questions you may
          have. Feel free to reach out to our team through our{" "}
          <a
            href="link to your contact page"
            className="text-blue-500 hover:underline"
          >
            Contact Page
          </a>
          . We look forward to assisting you in your quest for the extraordinary.
        </p>
      </div>
    </div>
 

        <Footer/>
        </div>
  )
}

export default About
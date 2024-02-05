import React from 'react'
import Layout from '../components/layout/layout.js'

const About = () => {
  return (
    <Layout>
    <br/><br/>
      <div className="container mt-5 ml-2">
        <div className="row">
        <div className="col-12 col-md-6 container2">
          <img className="about-img" src="/images/about.jpg" alt=""/>
        </div>
        <div className="col-12 col-md-6 about-para">
          <h1 className="bg-success text-center text-white">About KisanKart</h1>
          <p>Our Story

At Kisan Kart, we are passionate about connecting farmers with the tools and resources they need to thrive. Our journey began with a simple idea: to create an e-commerce platform that empowers farmers, supports local agriculture, and promotes sustainable farming practices.
Our Mission

Empowering Farmers: Our mission is to empower farmers by providing them with a convenient and reliable platform to access the latest farming equipment, supplies, and resources. We believe that when farmers have the right tools at their fingertips, they can achieve greater productivity and success.

Supporting Local Agriculture: We are committed to supporting local agriculture and strengthening rural communities. By connecting farmers with customers and suppliers in their region, we promote economic growth and sustainability.

Sustainability: At Kisan Kart, we understand the importance of sustainable farming practices. We are dedicated to offering eco-friendly products and resources that help farmers reduce their environmental impact and contribute to a greener future.</p>
        </div>
        </div>
      </div>
         </Layout>
  )
}

export default About;

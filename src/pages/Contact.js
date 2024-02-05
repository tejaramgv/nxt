import React from 'react';
import Layout from '../components/layout/layout.js';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../Practice.css";

const Contact = () => {
  return (
    <Layout>
    <br/><br/><br/>
      <div className="contact-container shadow-lg">
        <h2 className="policy">Contact Us</h2>
        <h5>For any kind of queries feel free to contact us..</h5>
        <div className="contact-info">
          <div className="contact-item">
            <i className="bi bi-geo-alt"></i>
            Andhra Pradesh, Ongole, IIIT RGUKT Ongole
          </div>
          <div className="contact-item">
            <i className="bi bi-envelope"> <a href="kisankartsupport@gmail.com">kisankartsupport@gmail.com</a></i>
            
          </div>
          <div className="contact-item">
            <i className="bi bi-phone"></i>
            1234-666-232
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

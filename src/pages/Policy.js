import React from 'react';
import Layout from '../components/layout/layout.js';
 // Import your CSS file for additional styles
import "../Practice.css";

const PrivacyPolicy = () => {
  return (
    <Layout>
    <br/>
    <br/><br/>
      <div className="privacy-policy-container shadow-lg">
        <center><h1 className="policy">Privacy Policy</h1></center>

        <p>
          At Kisan Kart, we take your privacy seriously. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you use our website.
        </p>

        <h3 className="policy">Information We Collect</h3>
        <p>
          We collect personal information that you provide directly to us, such as your name, email
          address, and contact number when you register on our website.
        </p>

        <h3 className="policy">How We Use Your Information</h3>
        <p>
          We use the information you provide to process your orders, communicate with you, and
          improve our services. We do not sell or share your personal information with third parties
          for marketing purposes.
        </p>

        <h3 className="policy">Security</h3>
        <p>
          We implement security measures to protect your personal information. However, no method of
          transmission over the internet or electronic storage is 100% secure, and we cannot guarantee
          absolute security.
        </p>

        <h3 className="policy">Cookies</h3>
        <p>
          We use cookies to enhance your experience on our website. You can disable cookies in your
          browser settings, but it may affect the functionality of our site.
        </p>

        <h3 className="policy">Changes to This Privacy Policy</h3>
        <p>
          We may update our Privacy Policy from time to time. Any changes will be posted on this page,
          and the date of the last update will be indicated.
        </p>

        <h3 className="policy">Contact Us</h3>
        <p>
          If you have any questions or concerns about our Privacy Policy, please contact us at{' '}
          <a href="mailto:kisankartsupport@gmail.com">kisankartsupport@gmail.com</a>.
        </p>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;

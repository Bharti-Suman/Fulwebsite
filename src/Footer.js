import React from 'react'
import'./Footer.css'

const Footer = () => {
  return (
    <div className="Footer">
        <div className="sb__footer section __padding">
            <div className="sb__footer-links">
                <div className="sb__footer-links_div">
                <h4>Ful.io</h4>
                    <p>2023 Ful,Inc.All rights reserver</p>
                <a href="/facebook">
                    <p>facebook</p>
                    </a>
                    < a href="/Linkedin">
                    <p>Linkedin</p>
                </a>
                </div>
                <div className="sb__footer-links_div">
                <h4>Features</h4>
                <a href="/employer">
                    <p>Check Domain</p>
                </a>
                <a href="/email Verification">
                    <p>Email Verification</p>
                </a>
                <a href="/employer">
                    <p>Zone Files Downloads</p>
                </a>
                <a href="/employer">
                    <p>Category Search</p>
                </a>
                <a href="/employer">
                    <p>Technology Search</p>
                </a>
                </div>
            
            <div className="sb__footer-links_div">
                <h4>Top Technology Reports</h4>
                <a href="/resource">
                    <p>Website using Nginx</p>
                </a>
                <a href="/resource">
                    <p>Website using JQuery</p>
                </a>
                <a href="/resource">
                    <p>Website using MySql</p>
                </a>
                <a href="/resource">
                    <p>Website using Shopify</p>
                </a>
                <a href="/resource">
                    <p>Website using WooCommerce</p>
                </a>
                
            </div>
            <div className="sb__footer-links_div">
                <h4>More to know</h4>
                <a href="/Feature Comparison">
                    <p>Feature Comparison</p>
                </a>
                <a href="/Pricing">
                    <p>Pricing</p>
                </a>
                <a href="/careers">
                    <p>Careers</p>
                </a>
                <a href="/terms">
                    <p>Terms of Use </p>
                </a>
                <a href="about">
                    <p>About Us</p>
                </a>
                
                </div>
                <div className="sb__footer-links_div">
                <h4>Contact</h4>
                <a href="/mail">
                    <p>support@ful.io</p>
                </a>
                <a href="/contact">
                    <p>+13433036668</p>
                </a>
                <a href="/address">
                    <p>Address</p>
                </a>
                
                
            </div>
        </div>
        </div>
        <hr></hr>
        <div className="sb__footer-below">
        <div className="sb__footer-copyright">
            <p>Made with love in Bangalore</p>
        </div>
        

        </div>
      
    </div>
    
 

  )
}

export default Footer

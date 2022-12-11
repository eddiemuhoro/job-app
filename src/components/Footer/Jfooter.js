import React from 'react'

import './footer.css'

import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import { Link } from 'react-router-dom';
const Footer = () => {
 
  
  return (
    <footer>
        <div className='row footer-row'>
            <div className='contact-us'>
                <h3>CONTACT US</h3>
                <ul>
                   <li><Link to='/home/jobs'>Find Job</Link> </li>

                    <li><a href="tel:+254 791849836">+254 794183313</a></li>

                    <li className="footer-space"><a
                            href="eddiemuho@gmail.com">eddiea@gmail.com</a></li>

</ul>
            </div>
           
            <div className='links'>
                 <h3>QUICK LINKS</h3>
                 <ul>
                    <li>About Jobsy</li>

                    <li>Impact Stories</li>

                    <li>Reports</li>

                    <li>Partners</li>

                    <li>Get involved</li>
                </ul>
            </div>
            <div className='social-media'>
              <h3>SOCIAL MEDIA</h3>
             <ul className="social-icons">
                    <li><Facebook/></li>
                    <li><Twitter /></li>
                    <li><LinkedIn/></li>
                    <li><Instagram /></li>
                </ul>

                <ul className="policy-ul">
                    <li><a href="/privacy-policy/">Privacy Policy | </a></li>
                    <li><a href="/terms-and-conditions/"> T&Cs</a></li>
                </ul>
            </div>
        </div>

       
          <a className="copyright">© JobSy 2022</a>
    </footer>
  )
}

export default Footer
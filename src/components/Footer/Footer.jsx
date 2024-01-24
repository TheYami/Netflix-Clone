import React from 'react'
import { FooterCon } from './styled'

function Footer() {
  return (
    <FooterCon>
        <p>Questions? Call 1-800-012-298</p>
        <div className='container'>
            <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Investor Relations</a></li>
                <li><a href="#">Ways to Watch</a></li>
                <li><a href="#">Corporate Information</a></li>
                <li><a href="#">Only on Netflix</a></li>
            </ul>

            <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>

            <ul>
                <li><a href="#">Account</a></li>
                <li><a href="#">Redeem Gift Cards</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Speed Test</a></li>
            </ul>

            <ul>
                <li><a href="#">Media Center</a></li>
                <li><a href="#">Buy Gift Cards</a></li>
                <li><a href="#">Cookie Preferences</a></li>
                <li><a href="#">Legal Notices</a></li>
            </ul>
        </div>

        <select >
            <option value="enlish">English</option>
            <option value="thei">Thai</option>
        </select>

        <p className='copy'>Netflix Thailand</p>
    </FooterCon>
  )
}

export default Footer
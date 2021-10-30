import React from 'react'
import styled from 'styled-components'
import {InnerLayout} from '../styles/Layouts'
import logo from '../img/logo.svg'

function Footer() {
    return (
        <FooterStyled>
            <InnerLayout>
               <div className="footer-container">
                   <div className="logo-container">
                       <img src={logo} />
                       <p>
                           Copyright @2021 LoremIpsum. <br/>
                           All rights reserved.
                       </p>
                   </div>
                   <ul className="bottom-nav">
                        <div className="link1">
                            <li>
                                <a href="">Team</a>
                            </li>
                            <li>
                                <a href="">Press</a>
                            </li>
                            <li>
                                <a href="">Fees</a>
                            </li>
                        </div>
                        <div className="link2">
                            <li>
                                <a href="">Services</a>
                            </li>
                            <li>
                                <a href="">Projects</a>
                            </li>
                            <li>
                                <a href="">Affiliate</a>
                            </li>
                        </div>
                        <div className="link3">
                            <li>
                                <a href="">Term of use</a>
                            </li>
                            <li>
                                <a href="">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="">Contact us</a>
                            </li>
                        </div>
                   </ul>
               </div>
            </InnerLayout>
        </FooterStyled>
    )
}

const FooterStyled = styled.footer`
    background-color: #DCE2F0;
    margin: 0 auto;
    .footer-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .logo-container {
        display: flex;
        align-items: center;
        flex-direction: column;
        img {
            margin-left: -25%;
            margin-bottom: 1rem;
        }
    }

    .bottom-nav {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        li {
            margin-bottom: 2rem;
        }
    }
`

export default Footer

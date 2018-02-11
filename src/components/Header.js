import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export default (props) => (
    <header className="page-header">
        <section className="title">
            <div className="logo-main">
                <img className="logo" src="/crl_logo.png" alt="logo"></img>
            </div>
            {/*<h1 className="game-name">*/}
                {/*<Link to="/">Liberation By Design</Link>*/}
            {/*</h1>*/}
        </section>

        <section className="nav-buttons">
            <nav className="wrapper">
                <ul className="buttons">
                    <li><NavLink exact to='/' activeClassName="active">Home</NavLink></li>
                    <li><NavLink exact to='/how-to-play' activeClassName="active">How To Play</NavLink></li>
                    <li><NavLink exact to='/our-definitions' activeClassName="active">Our Definitions</NavLink></li>
                    <li><NavLink exact to='/play' activeClassName="active">Play</NavLink></li>
                </ul>
            </nav>
        </section>
    </header>
)

// e: normal;
// }
//
// site.css?&filte…tures=false:15
//     .Header-nav {
//     font-family: Arial,Helvetica,sans-serif;
//     font-weight: 700;
//     font-size: 14px;
//     letter-spacing: 0em;
//     font-family: futura-pt;
//     font-weight: 600;
//     font-style: normal;
//     font-size: 11px;
//     letter-spacing: .18em;
//     text-transform: uppercase;

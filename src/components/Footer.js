import React from 'react'
// import {Link, NavLink} from 'react-router-dom'


export default (props) => (
    <footer className="page-footer">
        <section className="footer">
            <ul className="footer-buttons">
                <li><a href="http://www.creativereactionlab.com/upcoming-events"
                >upcoming events</a></li>
                <li><a href="http://www.creativereactionlab.com/partnership-interest-form
">becoming a partner</a></li>
                <li><a href="http://www.creativereactionlab.com/subscribe">subscribe</a></li>
                <li><a href="http://www.creativereactionlab.com/donate">donate</a></li>
                <li><a href="http://www.creativereactionlab.com/contact">contact us</a></li>
            </ul>
        </section>
        <div className="copyright">
            <p>&copy; Creative Labs | 2018</p>
            <h3>CREATIVE REACTION LAB IS A REGISTERED 501C3 NONPROFIT ORGANIZATION.</h3>
        </div>
        <section className="social-media">
            <ul className="media-buttons">
                <li><a href="https://www.facebook.com/CreativeReactionLab" className="fa fa-facebook">facebook</a></li>
                <li><a href="https://twitter.com/CreativeRxlab" className="fa fa-twitter"></a>twitter</li>
                {/*https://twitter.com/CreativeRxlab*/}
                <li><a href="https://www.linkedin.com/company/creative-reaction-lab" className="fa fa-linkedin"></a></li>
                {/*https://www.linkedin.com/company/creative-reaction-lab*/}
            <li><a href="mailto:acarroll@creativereactionlab.com" className="fa fa-envelope-o"></a></li>
                {/*mailto:acarroll@creativereactionlab.com*/}
                <li><a href="https://www.instagram.com/crxlab/" className="fa fa-instagram"></a></li>
                {/*https://www.instagram.com/crxlab/*/}
            </ul>
        </section>
    </footer>

)

// <li><NavLink exact to='/' activeClassName="active">Home</NavLink></li>



    // <a href="mailto:jen@sharklasers.com"><img class="navPic" src="img/maillogo.png" alt="Email"></a>

import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

class Home extends Component {
  componentWillMount() {
      document.title = 'Liberation By Design'
  }

  render() {
    return (
      <div className="home-container">
          <h1>LIBERATION BY DESIGN</h1>
          <h3>An Interactive Game on the Case for Equity</h3>
          <p>Liberation by Design is an interactive card game that explores the meaning of key terms surrounding the fight for equity. Each card provides real-world scenarios from which participants are able to discuss and explore the meaning of:</p>
          <ul>
              <li>Equity</li>
              <li>Equality</li>
              <li>Diversity</li>
              <li>Inclusion</li>
          </ul>
          <p>Liberation by Design offers an invaluable opportunity to for students, educators and anyone interested in social justice to gain a deeper undestanding of the issues, as well as a safe space to share ideas to start dismantling the oppressive structures found in out society.</p>
          <Link to='/how-to-play' className="button">Get Started</Link>
      </div>
    )
  }
}

export default connect(
)(Home)

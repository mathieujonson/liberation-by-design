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
          <img src="/liberationbydesign.png" alt="Liberation By Design" />
          <p>Liberation by Design is an interactive card game that explores the meaning of key terms surrounding the fight for equity. Each card provides real-world scenarios from which participants are able to discuss and explore the meaning of:</p>
          <img src="/creativereactionlabgraphic.png" alt="Equity, Equality, Diversity, Inclusion" />
          <p>Liberation by Design offers an invaluable opportunity to for students, educators and anyone interested in social justice to gain a deeper undestanding of the issues, as well as a safe space to share ideas to start dismantling the oppressive structures found in out society.</p>
          <Link to='/how-to-play' className="button">Get Started</Link>
      </div>
    )
  }
}

export default connect(
)(Home)

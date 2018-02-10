import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { getDefinitions } from '../../actions/definitions';


class Definitions extends Component {
  componentDidMount() {
      document.title = 'Our Definitions - Liberation By Design'
  }

  render() {
    return (
        <div className="our-definitions-container">
            <h1>Our Definitions</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare ex in turpis tempor tincidunt. Nulla at nisl eleifend, congue dui ut, blandit tellus. Maecenas ullamcorper mauris a arcu pellentesque, nec facilisis nibh volutpat. Quisque a nibh vel dui porttitor mollis eu in tortor. Quisque sed libero semper elit scelerisque facilisis. Quisque iaculis mauris pellentesque elit commodo, et sollicitudin eros auctor. Nullam velit dolor, ultrices ac ante eget, fermentum volutpat odio.</p>
            <Link to='/play' className="button">Let's Play!</Link>
        </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        word:     state.singlePlayer.word,
        gameStep: state.singlePlayer.gameStep
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onGetWord: (key) => dispatch(getWord(key))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Definitions);


export default connect(
)(Definitions)

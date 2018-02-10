import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getDefinitions} from '../../actions/definitions';


class Definitions extends Component {
    componentWillMount() {
        this.props.getDefinitions()
    }

    componentDidMount() {
        document.title = 'Our Definitions - Liberation By Design'
    }

    render() {
        let list = ''

        if(Object.keys(this.props.definitions).length > 0) {
            list = this.props.definitions.definitions.map((definition, index) => {
                return (
                    <li key={index}><strong>{definition.term}</strong>: {definition.definition}</li>
                )
            })
        }

        return (
            <div className="our-definitions-container">
                <h1>Our Definitions</h1>
                <ul>
                    {list}
                </ul>
                <Link to='/play' className="button">Let's Play!</Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        definitions: state.definitions,
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getDefinitions: () => dispatch(getDefinitions())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Definitions);

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getDefinitions} from '../../actions/definitions';


class Definitions extends Component {
    componentWillMount() {
        this.props.getDefinitions()
        document.title = 'Our Definitions - Liberation By Design'

    }

    renderList(definition, term) {
        let colorClass = ''

        if(term === 'Equity') {
            colorClass = 'blue'
        }
        else if(term === 'Equality') {
            colorClass = 'orange'
        }
        else if(term === 'Diversity') {
            colorClass = 'green'
        }
        else {
            colorClass = 'pink'
        }
        return (
            <li><strong className={colorClass}>{term}</strong>: {definition}</li>
        )
    }

    render() {
        let list = ''

        if(Object.keys(this.props.definitions).length > 0) {
            list = Object.keys(this.props.definitions.definitions).map((definition) => {
                return (
                    this.renderList(this.props.definitions.definitions[definition].definition, this.props.definitions.definitions[definition].term)
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
        state: state,
        inProgress: state.definitions.inProgress
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getDefinitions: () => dispatch(getDefinitions())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Definitions);

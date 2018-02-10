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
        console.log("state", this.props.state)
        console.log("we have definitions!", this.props.definitions)

        let list = ''

        if(this.props.definitions.length) {

            list = this.props.definitions.definitions.map((definition) => {
                console.log("mapping",definition)
                return (
                    <li>{definition}</li>
                )
            })
            console.log(list);
        }

        return (
            <div className="our-definitions-container">
                <h1>Our Definitions</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare ex in turpis tempor tincidunt. Nulla at nisl eleifend, congue dui ut, blandit tellus. Maecenas ullamcorper mauris a arcu pellentesque, nec facilisis nibh volutpat. Quisque a nibh vel dui porttitor mollis eu in tortor. Quisque sed libero semper elit scelerisque facilisis. Quisque iaculis mauris pellentesque elit commodo, et sollicitudin eros auctor. Nullam velit dolor, ultrices ac ante eget, fermentum volutpat odio.</p>
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

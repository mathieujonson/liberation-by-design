import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getDefinition, pushDefinition} from '../../../actions/definitions';
import AdminNav from '../AdminNav'

class AdminDefinitions extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            term: "",
            definition: ""
        };
      }

    componentWillMount() {
        document.title = 'New Definition - Admin' 

        if(window.location.search.length > 0) {
            const key = window.location.search.split("=")[1]            
            this.props.getDefinition(key)
        }
    }      
  

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
          });
    }

    handleSubmit = () => {
        this.props.pushDefinition(this.state.term, this.state.definition)
        this.setState({
            term: '',
            definition: ''
        })
    }

    render() {

            return (
                <div className="definition-container">
                <AdminNav />
                <div className="definition-form-container">
                    <form>
                        <div className="form-group">
                            <label htmlFor="term">Term</label>
                            <input value={this.state.temr} type="text" id="term" onChange={(e)=>this.handleChange(e)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="definition">Definition</label>
                            <input value={this.state.definition} type="text" id="definition" onChange={(e)=>this.handleChange(e)} />
                        </div>                                                
                    </form>
                    <button className="button" onClick={()=>this.handleSubmit()}>Save</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        definitions: state.definitions,
        state: state,
        inProgress: state.definitions.inProgress,
        definition: state.definition
    };
}

function mapDispatchToProps(dispatch) {
    return {
        pushDefinition: (term, definition) => dispatch(pushDefinition(term, definition)),
        getDefinition: (key) => dispatch(getDefinition(key))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminDefinitions);
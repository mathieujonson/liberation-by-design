import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getDefinitions, pushNewDefinition} from '../../../actions/definitions';
import AdminNav from '../AdminNav'

class AdminDefinitions extends Component {
    componentWillMount() {
        this.props.pushNewDefinition()
        document.title = 'New Definition - Admin'
    }   
    
    constructor(props) {
        super(props);
    
        this.state = {
            term: "",
            definition: ""
        };
      }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
          });
    }

    handleSubmit = event => {        
        this.props.pushNewDefinition(this.state.term, this.state.definition)  
    }

    render() {        
            return (
                <div className="definition-container">
                <AdminNav />
                <div className="definition-form-container">
                    <form>
                        <div className="form-group">
                            <label htmlFor="term">Term</label>
                            <input value={this.state.term} type="text" id="term" onChange={(e)=>this.handleChange(e)} />
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
        inProgress: state.definitions.inProgress
    };
}

function mapDispatchToProps(dispatch) {
    return {
        pushNewDefinition: (term, definition) => dispatch(pushNewDefinition(term, definition))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminDefinitions);
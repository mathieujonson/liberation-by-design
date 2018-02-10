import React, {Component} from 'react';
import {connect} from 'react-redux';

class FlashMessage extends Component{

    render(){
        const {message} = this.props.flashMessage;
        if(!message){
            return null;
        }

        return (
            <div className="flash-message">
                {message}
            </div>
        );
    }
}

const mapStateToProps = ({flashMessage}) => {
    return {flashMessage};
};

export default connect(mapStateToProps)(FlashMessage);
import React from 'react';
import { connect } from 'react-redux';
import { updateStep } from '../../actions/definitions';

class CurrentWord extends React.Component {
    render() {
        let displayWord = [];

        if(this.props.lettersGuessed) {
            displayWord = this.props.word.split('').map((value) => {
                if(this.props.lettersGuessed.includes(value)) {
                    return value;
                }
                else {
                    return '_'
                }
            })
        }
        else {
            displayWord = this.props.word.replace(/[a-z]/g, '_')
        }

        return (
            <div className="current-word-container">
                {displayWord}
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        gameStep: state.singlePlayer.gameStep,
        word: state.singlePlayer.word,
        lettersGuessed: state.singlePlayer.lettersGuessed
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateStep: (step) => dispatch(updateStep(step))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWord);

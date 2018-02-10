import React from 'react';
import { connect } from 'react-redux';

class GuessHistory extends React.Component {
    render() {
        var reversedLetters = [];
        if(typeof this.props.letters === 'object') {
            for(var key in this.props.letters) {
                reversedLetters.unshift(this.props.letters[key])
            }
        }
        const letters = reversedLetters.join(', ')
        return (
            <div className="guess-history-container">
                <h3>Guessed Letters</h3>
                {letters}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        letters: state.singlePlayer.lettersGuessed,
    };
}

export default connect(mapStateToProps)(GuessHistory);

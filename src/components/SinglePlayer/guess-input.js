import React from 'react';
import { connect } from 'react-redux';
import { guessLetter, updateStep } from '../../actions/definitions';
import { sendFlashMessage} from '../../actions/flash-message';

class GuessInput extends React.Component {
    updateGame(e) {
        // The letter guessed
        var value = e.target.value.toLowerCase()

        // The letter isn't a letter
        if(!/[a-z]/i.test(value)) {
            this.props.sendFlashMessage(`That isn't a letter`)
        }
        // The letter has already been guessed
        else if(typeof this.props.lettersGuessed === 'object' && Object.values(this.props.lettersGuessed).indexOf(value) >= 0) {
             this.props.sendFlashMessage(`You already guessed that letter`)
        }
        else {
            // Process the letter
            this.props.onGuessLetter(value)

            // Update game step if the letter isn't in the word
            if(this.props.word.indexOf(value) < 0) {
                this.props.updateStep(this.props.gameStep - 1)
            }

            // Clear any messages
            this.props.sendFlashMessage('')
        }

        // Clear the input
        e.target.value = ''
    }

    render() {
        return (
            <div className="guess-letter-container">
                <label htmlFor="guess-input">Guess a letter:</label>
                <input type="text" onInput={this.updateGame.bind(this)} id="guess-input" className="guess-input" />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        word: state.singlePlayer.word,
        lettersGuessed: state.singlePlayer.lettersGuessed,
        gameStep: state.singlePlayer.gameStep
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onGuessLetter: (letter) => dispatch(guessLetter(letter)),
        updateStep: (step) => dispatch(updateStep(step)),
        sendFlashMessage: (message) => dispatch(sendFlashMessage(message))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GuessInput);

import React from 'react';
import { connect } from 'react-redux';
import { getWord } from '../../actions/definitions';
import FlashMessage from '../FlashMessage'
import HangmanImage from './hangman-image'
import CurrentWord from './current-word'
import GuessHistory from './guess-history'
import GuessInput from './guess-input'

class GameBoard extends React.Component {
    render() {
        return (
            <div className="game-board">
                <HangmanImage />
                <CurrentWord />
                <GuessInput />
                <GuessHistory />
                <FlashMessage />
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);

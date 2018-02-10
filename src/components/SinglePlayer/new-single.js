import React from 'react';
import { connect } from 'react-redux';
import { getWord } from '../../actions/definitions';

class NewSingle extends React.Component {
    componentDidMount() {
        // Update page title
        document.title = 'Single player - Hangs.me'
    }

    startGame() {
        // Generate random key
        const key = Math.floor(Math.random() * (96996 + 1));
        // Get the word
        this.props.onGetWord(key);
    }

    render() {
        return (
            <div>
                <p>Play a classic game of Hang Man, with a randomly chosen word from a list of over 96,000 words!</p>
                <button onClick={this.startGame.bind(this)}>New Game</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewSingle);

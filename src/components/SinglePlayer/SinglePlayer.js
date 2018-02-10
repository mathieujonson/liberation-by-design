import React from 'react';
import { connect } from 'react-redux';
import { getWord } from '../../actions/definitions';
import NewSingle from './new-single'
import GameBoard from './game-board'

class SinglePlayer extends React.Component {
    componentDidMount() {
        // Update page title
        document.title = 'Single player - Hangs.me'
    }

    render() {
        let markup = this.props.word ? <GameBoard /> : <NewSingle />

        return (
            <div className="single-player">
                <h2>Single Player</h2>
                {markup}
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

export default connect(mapStateToProps, mapDispatchToProps)(SinglePlayer);

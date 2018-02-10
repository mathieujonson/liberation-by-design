import React from 'react';
import { connect } from 'react-redux';

class HangmanImage extends React.Component {
    render() {
        var imageSrc = ''

        switch(this.props.gameStep) {
            case 7:
                imageSrc = 'http://placehold.it/300x150?text=gallows'
                break;
            case 6:
                imageSrc = 'http://placehold.it/300x150?text=gallows+head'
                break;
            case 5:
                imageSrc = 'http://placehold.it/300x150?text=gallows+head+body'
                break;
            case 4:
                imageSrc = 'http://placehold.it/300x150?text=gallows+head+body+leg'
                break;
            case 3:
                imageSrc = 'http://placehold.it/300x150?text=gallows+head+body+leg+leg'
                break;
            case 2:
                imageSrc = 'http://placehold.it/300x150?text=gallows+head+body+leg+leg+arm'
                break;
            case 1:
                imageSrc = 'http://placehold.it/300x150?text=gallows+head+body+leg+leg+arm+arm'
                break;
            case 0:
                imageSrc = 'http://placehold.it/300x150?text=dead'
                break;
            default:
                break;
        }
        return (
            <div className="image-container">
                <img src={imageSrc} alt="Hangman progress" />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        gameStep: state.singlePlayer.gameStep
    };
}

export default connect(mapStateToProps)(HangmanImage);

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class HowToPlay extends Component {
    componentWillMount() {
        document.title = 'How To Play - Liberation By Design'
    }

    render() {
        return (
            <div className="how-to-play-container">
                <h1 className="how-to">Rules and Instruction</h1>
                <h2 className="how-to_subheading">Objective</h2>
                <p>Liberation by Design is a discussion-based game intended to explore and critique our definitions of:
                    equity, equality, diversity and inclusion.</p>
                <h2 className="how-to_subheading">How to Play</h2>
                <h6 className="italics">Get into the Correct Mindset</h6>
                <p>Prior to the start of the game, participants are encouraged to set ground rules for discussion in
                    order to create a safe and open discussion.</p>
                <p className="bottom-margin-small">Examples include:</p>
                <ul>
                    <li className="how-to-bullets">Be sensitive to others' experiences and opinions</li>
                    <li className="how-to-bullets">Practice empathy and humility</li>
                    <li className="how-to-bullets">Be critical</li>
                    <li className="how-to-bullets">Listen actively</li>
                    <li className="how-to-bullets">Lean into discomfort</li>
                    <li className="how-to-bullets">Be open to multiple perspectives</li>
                    <li className="how-to-bullets">Recognize how your personal experiences affect your perspective</li>
                    <li className="how-to-bullets">Do not share confidential information outside of the game</li>
                </ul>
                <h2><i>Playing the Game</i></h2>
                <ol>
                    <li>Participants will be presented with real-life scenarios that demonstrate
                        one of the key term defintions: equity, equality, diversity, and inclusion.</li>
                    <li className="how-to-ol">Participants discuss the scenario and choose the term that they believe is
                        the best match.
                    </li>
                    <li className="how-to-ol">Once a term has been selected, the answer will be revealed and points will
                        be awarded if the correct answer was selected.
                    </li>
                    <li className="how-to-ol">After the answer is revealed, participants are encouraged to discuss the
                        scenario in more detail.
                    </li>
                    <li className="how-to-ol">The game ends when all of the cards have been read and discussed.</li>
                </ol>

                <Link to='/our-definitions' className="button">Next</Link>
            </div>
        )
    }
}

export default connect(
)(HowToPlay)

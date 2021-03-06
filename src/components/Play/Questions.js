import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getQuestions} from '../../actions/questions'
import {updateUser, updateQuestion} from '../../actions/user'


class Questions extends Component {

    constructor(props) {
        super(props);

        this.handleAnswerSelect = this.handleAnswerSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        // this.props.getQuestions().then(
        // onFulfilled => {
        //     console.log('***success*** ', onFulfilled)
        // }, 
        // onRejected => {
        //     console.log('***failure*** ', onRejected)
        // })
        let questionId = Object.keys(this.props.user.questions)[0]
        this.props.updateQuestion(questionId)
    }

    getSiblings(el, filter) {
        var siblings = [];
        el = el.parentNode.firstChild;
        do { if (!filter || filter(el)) siblings.push(el); } while (el = el.nextSibling);
        return siblings;
    }

    flipCard() {
        const nextBtn = document.querySelector('.btn--next');
        const card = document.querySelector('.card-container');
        card.classList.toggle('flip');
    }

    handleAnswerSelect(e) {
        let siblings = this.getSiblings(e.target)
        siblings.forEach( (sibling) => {
            sibling.classList.remove("answer--active")
        })
        e.target.classList.add('answer--active')
    }

    handleSubmit(e) {
        let selectedButton = document.querySelector('.answer--active')
        console.log('123876123876', selectedButton)
        if(selectedButton) {
            this.flipCard()
            let submitButton = document.querySelector('.btn--next')
            submitButton.textContent = 'Next'
            console.log(selectedButton.getAttribute('value'))
            let correct = false 
            let selectedAnswer = selectedButton.getAttribute('value')
            // if(selectedAnswer)

            let pointsElement = document.querySelector('.question__points')
            console.log('points ele', pointsElement)
            let points = pointsElement.getAttribute('value')
            console.log('points', points)
            let score = this.props.user.score + points
            this.props.updateUser(this.props.user.id, this.props.questions.questions, correct, points, score)
        }
    }

    renderAnswerSVG(answer) {
        switch(answer) {
            case 'equality':
            return(
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 134.42 30.72" fill="#d3834d"><defs></defs><title>Asset 3</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M80.31,3.19a241.12,241.12,0,0,1-.52,24.49,1.75,1.75,0,0,0,1.73,1.73l10.11-.36c2.21-.08,2.22-3.54,0-3.46L81.52,26l1.73,1.73q.87-12.24.52-24.49C83.7,1,80.24,1,80.31,3.19Z" /><path class="cls-1" d="M96.6,4.72A125.9,125.9,0,0,1,98,27.83c-.06,2.23,3.4,2.23,3.46,0a131.33,131.33,0,0,0-1.52-24c-.34-2.2-3.68-1.27-3.34.91Z" /><path class="cls-1" d="M61.61,28.19C62.28,24,63,19.75,63.72,15.55c.68-3.79,1-8.2,2.59-11.76l-3.16-.41q4.44,12.43,8.2,25.1l3.34-.92-.47-1.24c-.78-2.06-4.12-1.16-3.34.92l.47,1.24c.77,2,4,1.26,3.34-.92Q70.93,14.9,66.48,2.46C66,1.23,64,.56,63.32,2.05c-3.3,7.6-3.76,17.08-5,25.22-.34,2.17,3,3.11,3.33.92Z" /><path class="cls-1" d="M62.91,21.24l6.56-.87a1.8,1.8,0,0,0,1.73-1.73c0-.84-.81-1.86-1.73-1.73l-6.56.88a1.78,1.78,0,0,0-1.73,1.73,1.73,1.73,0,0,0,1.73,1.72Z" /><path class="cls-1" d="M109.21,3.16a190.05,190.05,0,0,1,.3,24.8c-.14,2.22,3.31,2.21,3.46,0a190.05,190.05,0,0,0-.31-24.8c-.14-2.21-3.6-2.23-3.45,0Z" /><path class="cls-1" d="M104.68,5.13a124.33,124.33,0,0,1,12.51-.48c2.23,0,2.23-3.43,0-3.45a121.44,121.44,0,0,0-12.51.47c-2.2.2-2.22,3.66,0,3.46Z" /><path class="cls-1" d="M0,4.17c0,8,.47,15.9.7,23.85a1.79,1.79,0,0,0,1.78,1.77c3.34-.3,6.66-.61,10-.7,2.28-.05,2.29-3.6,0-3.55-3.36.09-6.68.4-10,.71L4.25,28c-.23-7.95-.66-15.9-.7-23.85C3.54,1.89,0,1.88,0,4.17Z" /><path class="cls-1" d="M2.33,5.28a30.28,30.28,0,0,1,8.18-.19c2.27.24,2.25-3.31,0-3.55a34,34,0,0,0-9.12.32c-2.25.37-1.3,3.79.94,3.42Z" /><path class="cls-1" d="M2.79,16l6.79-.19c2.28-.07,2.29-3.62,0-3.55l-6.79.2C.51,12.5.5,16.05,2.79,16Z" /><path class="cls-1" d="M24,1.09C13.1,4.43,15.72,33.37,27.4,29.46,33,27.6,34,19.25,33.64,14.33,33.24,8.57,31.12,1.55,24.46,1c-2.3-.18-2.29,3.39,0,3.57,6.41.51,7,13.67,4.47,18-1.44,2.51-4.82,3.24-6.5.71-1-1.47-1.35-4.8-1.51-6.36-.35-3.53-.44-11,4-12.41,2.2-.67,1.26-4.13-.95-3.45Z" /><path class="cls-1" d="M26.52,22.79a34.66,34.66,0,0,1,4.15,6.89c1.1,2.35,4.57.3,3.47-2a39.29,39.29,0,0,0-4.77-7.71,2,2,0,0,0-2.85,0,2.08,2.08,0,0,0,0,2.85Z" /><path class="cls-1" d="M38.63,2.83c0,5.5,0,11.05.59,16.53.35,3.7,1.05,9.06,5.2,10.51C56.21,34,52.67,7,52.59,2.34c0-2.62-4.12-2.63-4.08,0,.07,4.49.15,9,.21,13.45a42.28,42.28,0,0,1,0,5.28Q49.1,26.94,44,23.4A11.81,11.81,0,0,1,43.5,21c-.92-5.93-.77-12.15-.78-18.15,0-2.62-4.09-2.63-4.09,0Z" /><path class="cls-1" d="M121.79,3.93c2.29,4.87,4.57,9.75,6.66,14.7.87,2,3.85.28,3-1.74-2.1-5-4.37-9.83-6.66-14.7-1-2-3.93-.26-3,1.74Z" /><path class="cls-1" d="M131.06,1.25c-1.45,8.92-2.64,17.88-3.47,26.88h3.46l.07-1.57c.1-2.23-3.36-2.22-3.46,0l-.07,1.57c-.1,2.25,3.25,2.18,3.46,0,.8-8.7,1.94-17.34,3.34-26,.36-2.18-3-3.11-3.33-.92Z" /></g></g></svg> 
            )
            break;
            case 'equity':
            return(
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96.27 31.01" fill="#6bcbd9"><defs></defs><title>Asset 4</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M0,4.49c0,7.94.47,15.88.7,23.82a1.79,1.79,0,0,0,1.78,1.77c3.34-.3,6.65-.61,10-.7,2.28-.05,2.28-3.6,0-3.54-3.36.08-6.67.4-10,.7l1.77,1.77C4,20.37,3.58,12.43,3.54,4.49A1.77,1.77,0,0,0,0,4.49Z" /><path class="cls-1" d="M2.33,5.6a30.21,30.21,0,0,1,8.17-.19c2.26.24,2.25-3.3,0-3.54a33.49,33.49,0,0,0-9.11.31C-.86,2.55.09,6,2.33,5.6Z" /><path class="cls-1" d="M2.79,16.29l6.78-.2c2.27-.06,2.28-3.61,0-3.54l-6.78.2c-2.28.06-2.29,3.61,0,3.54Z" /><path class="cls-1" d="M24,1.41C13.08,4.75,15.7,33.66,27.36,29.75c5.56-1.86,6.58-10.2,6.24-15.12-.4-5.75-2.51-12.76-9.17-13.28-2.3-.18-2.28,3.39,0,3.57,6.41.51,6.94,13.65,4.46,18-1.43,2.5-4.81,3.24-6.48.71-1-1.47-1.36-4.79-1.52-6.36-.35-3.52-.43-11,4-12.39C27.09,4.19,26.16.74,24,1.41Z" /><path class="cls-1" d="M26.49,23.08A34.9,34.9,0,0,1,30.63,30c1.1,2.34,4.57.3,3.47-2a39.22,39.22,0,0,0-4.77-7.7,2,2,0,0,0-2.84,0,2.06,2.06,0,0,0,0,2.84Z" /><path class="cls-1" d="M38.59,3c0,5.49,0,11,.58,16.51.36,3.69,1,9,5.2,10.49C56.15,34.11,52.6,7.13,52.53,2.51c0-2.62-4.12-2.63-4.08,0,.07,4.48.15,9,.21,13.43a42.28,42.28,0,0,1,0,5.28q.39,5.85-4.72,2.32a12.49,12.49,0,0,1-.48-2.42C42.53,15.2,42.68,9,42.67,3c0-2.63-4.09-2.63-4.08,0Z" /><path class="cls-1" d="M58.19,5a125.47,125.47,0,0,1,1.4,23.08c-.06,2.22,3.39,2.22,3.46,0a131.12,131.12,0,0,0-1.53-24c-.34-2.19-3.66-1.26-3.33.92Z" /><path class="cls-1" d="M71.09,3.46a191.36,191.36,0,0,1,.31,24.77c-.15,2.22,3.3,2.21,3.45,0a189.62,189.62,0,0,0-.31-24.77c-.14-2.21-3.59-2.22-3.45,0Z" /><path class="cls-1" d="M66.57,5.43A124.13,124.13,0,0,1,79.07,5c2.22,0,2.22-3.42,0-3.45A124.13,124.13,0,0,0,66.57,2c-2.2.19-2.22,3.65,0,3.45Z" /><path class="cls-1" d="M83.66,3.93c2.29,4.86,4.56,9.73,6.65,14.68.87,2,3.84.28,3-1.74-2.1-5-4.37-9.82-6.66-14.69-.94-2-3.92-.25-3,1.75Z" /><path class="cls-1" d="M92.92,1.25c-1.45,8.91-2.64,17.85-3.47,26.84H92.9L93,26.53c.1-2.23-3.36-2.22-3.46,0l-.07,1.56c-.1,2.25,3.25,2.18,3.45,0,.81-8.68,1.95-17.32,3.35-25.92.35-2.18-3-3.11-3.33-.92Z" /></g></g></svg>
            )
            break;
            case 'inclusion':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 132.52 28.13" fill="#c44062"><defs></defs><title>Asset 1</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M45.6,3.28q.33,11.63-.49,23.21a1.65,1.65,0,0,0,1.64,1.64l9.57-.35c2.1-.07,2.11-3.35,0-3.27l-9.57.34,1.63,1.64a227.48,227.48,0,0,0,.49-23.21c-.06-2.1-3.33-2.11-3.27,0Z" /><path class="cls-1" d="M0,3.38A133.39,133.39,0,0,1,1.2,26.5c-.07,2.17,3.3,2.16,3.37,0a138.68,138.68,0,0,0-1.3-24C3,.35-.28,1.26,0,3.38Z" /><path class="cls-1" d="M94.2,3.38A132.41,132.41,0,0,1,95.39,26.5c-.08,2.17,3.29,2.16,3.36,0a136.73,136.73,0,0,0-1.3-24c-.3-2.14-3.55-1.23-3.25.89Z" /><path class="cls-1" d="M105,2.51C103.81,9,102.7,16,104.81,22.43c1,3.22,3.8,7.34,7.46,4.49C119.18,21.54,118,1,107.56.61c-2.11-.08-2.1,3.19,0,3.27,4,.15,5.61,7.76,5.68,10.56.05,1.79-1.15,12.55-5.27,7.12-3-3.95-.61-13.87.17-18.18.37-2.06-2.78-2.94-3.16-.87Z" /><path class="cls-1" d="M124.28,26a136.42,136.42,0,0,0,0-23.57l-3,.82c4.26,7,4.92,15.73,7.28,23.41a1.65,1.65,0,0,0,3.22-.43c.9-8.18.31-16.44.79-24.63.12-2.11-3.15-2.1-3.28,0-.48,8.19.12,16.45-.78,24.63l3.21-.44c-2.45-8-3.18-17-7.61-24.19-.8-1.3-3.19-.87-3.06.83A135.43,135.43,0,0,1,121,26c-.19,2.1,3.08,2.09,3.28,0Z" /><path class="cls-1" d="M13.5,26.1a136.53,136.53,0,0,0,0-23.58l-3.05.83c4.26,7,4.92,15.73,7.28,23.41A1.65,1.65,0,0,0,21,26.32c.9-8.17.31-16.43.79-24.63.12-2.1-3.15-2.1-3.28,0-.48,8.2.12,16.46-.78,24.63l3.21-.43c-2.45-8-3.18-17-7.61-24.19-.8-1.3-3.19-.87-3.06.82a135.54,135.54,0,0,1,0,23.58c-.19,2.1,3.08,2.08,3.28,0Z" /><path class="cls-1" d="M60,3.26c0,4.79.06,9.63.51,14.4.34,3.69,1.07,9.08,5.45,10.07,10.64,2.41,7.25-20.07,7.17-24.91,0-2.42-3.81-2.43-3.77,0l.19,11.23a39,39,0,0,1,0,5.62l-.79,3c-3.24.14-4.71-1.24-4.39-4.12a124.68,124.68,0,0,1-.6-15.34,1.89,1.89,0,0,0-3.77,0Z" /><path class="cls-1" d="M38.05,1.56c-8.76-2.95-12.3,11.06-11.39,17.19,1,6.94,8.56,13.22,13.84,5.92,1.48-2.05-1.92-4-3.39-2-2.17,3-4.65.62-5.73-1.53a12.56,12.56,0,0,1-.9-6.72c.24-2.73,2.36-10.5,6.52-9.1,2.4.81,3.43-3,1-3.78Z" /><path class="cls-1" d="M88.29,5C86.05.54,80,1.14,79.15,6.31A9.21,9.21,0,0,0,80.57,13a14,14,0,0,0,2.67,2.26,6.52,6.52,0,0,1,2.63,3.45,2.71,2.71,0,0,1,.22,2.24c0,2.07-1.45,2.28-4.4.64-.27-2.27-3.86-2.29-3.58,0,.3,2.49.89,5.05,3.56,6.05a5.52,5.52,0,0,0,6.45-2.22,9,9,0,0,0-1.5-12.13c-.61-.54-1.46-.88-2-1.44l-1.76-2.4c-.76-1.87,0-2.76,2.38-2.64,1,2.06,4.14.24,3.09-1.81Z" /></g></g></svg>                
            )
                break;
            case 'diversity':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 131.66 28.9" fill="#97c63f"><defs></defs><title>Asset 2</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M94.69,4.86A120.85,120.85,0,0,1,96,27c-.06,2.14,3.26,2.14,3.32,0A126.9,126.9,0,0,0,97.89,4c-.33-2.1-3.53-1.21-3.2.88Z" /><path class="cls-1" d="M17.51,4.86A121.74,121.74,0,0,1,18.86,27c-.07,2.14,3.25,2.14,3.31,0A125.13,125.13,0,0,0,20.71,4c-.33-2.1-3.52-1.21-3.2.88Z" /><path class="cls-1" d="M61.36,4a76.74,76.74,0,0,1,.71,23c-.29,2.17,3.12,2.15,3.41,0a79.84,79.84,0,0,0-.83-23.95C64.27,1,61,1.87,61.36,4Z" /><path class="cls-1" d="M63.86,5c3-2,4.76-1.32,5.3,2A6.87,6.87,0,0,1,66,10.69,1.77,1.77,0,0,0,65.4,13q3.67,7.19,7.34,14.37c1,2,4,.23,3-1.73Q72,18.49,68.35,11.3l-.62,2.34c3-2,6.27-5.79,4.64-9.65C70.57-.26,65.45.37,62.14,2.09c-2,1-.22,4,1.72,2.94Z" /><path class="cls-1" d="M107.53,3.14a183.24,183.24,0,0,1,.3,23.78c-.14,2.13,3.17,2.13,3.31,0a181.48,181.48,0,0,0-.29-23.78c-.14-2.12-3.45-2.14-3.32,0Z" /><path class="cls-1" d="M103.19,5q6-.53,12-.46c2.14,0,2.14-3.29,0-3.31q-6-.07-12,.45c-2.11.19-2.13,3.51,0,3.32Z" /><path class="cls-1" d="M45.13,4c0,7.66.46,15.31.68,23a1.71,1.71,0,0,0,1.71,1.7c3.2-.29,6.39-.59,9.61-.67,2.19-.06,2.2-3.47,0-3.41-3.22.08-6.41.38-9.61.67L49.22,27c-.22-7.66-.64-15.31-.67-23,0-2.19-3.43-2.2-3.42,0Z" /><path class="cls-1" d="M47.37,5.06a29.08,29.08,0,0,1,7.85-.18c2.18.23,2.16-3.18,0-3.41a32.47,32.47,0,0,0-8.75.3c-2.16.36-1.25,3.64.9,3.29Z" /><path class="cls-1" d="M47.81,15.37l6.52-.19c2.19-.07,2.19-3.48,0-3.41L47.81,12c-2.19.06-2.2,3.47,0,3.41Z" /><path class="cls-1" d="M119.55,3.77c2.19,4.67,4.37,9.35,6.38,14.1.83,2,3.69.27,2.87-1.67-2-4.76-4.2-9.43-6.39-14.1-.91-1.93-3.77-.25-2.86,1.67Z" /><path class="cls-1" d="M128.43,1.2C127,9.76,125.9,18.34,125.1,27h3.32l.07-1.51c.1-2.13-3.22-2.13-3.32,0L125.1,27c-.09,2.16,3.13,2.09,3.32,0,.77-8.34,1.87-16.63,3.21-24.9.34-2.09-2.85-3-3.2-.88Z" /><path class="cls-1" d="M89,4.33c-2.29-4.73-8.53-4-9.34,1.4a9.94,9.94,0,0,0,1.45,7,15.37,15.37,0,0,0,2.71,2.38,6.91,6.91,0,0,1,2.64,3.68,3,3,0,0,1,.22,2.39q.07,3.16-4.36.67c-.27-2.34-4-2.37-3.72,0,.3,2.59.88,5.33,3.64,6.38a5.56,5.56,0,0,0,6.58-2.33,9.93,9.93,0,0,0,1.1-9,9.47,9.47,0,0,0-2.63-3.84c-.62-.56-1.49-.93-2.07-1.52L83.46,9c-.78-1.92,0-2.86,2.33-2.83,1,2.15,4.24.27,3.21-1.88Z" /><path class="cls-1" d="M0,3.94Q.55,15.22.59,26.51a1.72,1.72,0,0,0,3.44,0q0-11.3-.58-22.57C3.34,1.73-.11,1.72,0,3.94Z" /><path class="cls-1" d="M2.28,5.28C13.56,1.54,13.63,29,2.69,24.85c-2.08-.8-3,2.53-.92,3.32C18.49,34.58,18.24-3.65,1.36,2c-2.09.69-1.2,4,.92,3.32Z" /><path class="cls-1" d="M25.67,3.65c2.6,7.74,3.85,15.85,6.56,23.57.51,1.45,3.05,1.84,3.36,0,1.31-7.95,3.27-15.74,5.25-23.54.55-2.17-2.8-3.09-3.35-.92-2,7.8-4,15.59-5.26,23.53h3.36c-2.71-7.71-4-15.82-6.57-23.57-.71-2.11-4.07-1.2-3.35.93Z" /></g></g></svg>                
            )
                break;                
        }

    }
    
    handleNext() {

    }

    render() {
        

        let question = this.props.questions.questions[Object.keys(this.props.user.questions)[0]]

        let questionMarkup = <p>{question.question}</p>

        let pointsMarkup = question.points > 1 ? `${question.points} points` : `${question.points} point`;

        return (
            <div>
                <div className="card-container">
                    <div className="card">
                        <div className="card__side card__side--question">
                            <div className="question__text">
                                {questionMarkup}
                            </div>
                            <div className="question__info">
                                <div className="question__skill">{question.skill}</div>
                                <div className="question__points" value={question.points}>{pointsMarkup}</div>
                            </div>
                        </div>
                        <div className="card__side card__side--answer">
                            <div className="answer__text">
                                <p>{this.renderAnswerSVG(question.answer)} by design</p>
                            </div>
                        </div>                        
                    </div>
                </div>
                <div className="answer-buttons">
                    <button className="btn btn--answer btn--equity" value="equity" onClick={this.handleAnswerSelect}>Equity</button>
                    <button className="btn btn--answer btn--equality" value="equality" onClick={this.handleAnswerSelect}>Equality</button>
                    <button className="btn btn--answer btn--diversity" value="diversity" onClick={this.handleAnswerSelect}>Diversity</button>
                    <button className="btn btn--answer btn--inclusion" value="inclusion" onClick={this.handleAnswerSelect}>Inclusion</button>
                </div>
                <div className="game-nav">
                    <div className="btn btn-lg btn--next" onClick={this.handleSubmit}>Submit</div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        questions: state.questions,
        user: state.user,
        state: state,
        inProgress: state.questions.inProgress
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getQuestions: () => dispatch(getQuestions()),
        updateQuestion: (question) => dispatch(updateQuestion()),
        updateUser: (userId, questionId, answer, points, score) => dispatch(updateUser(userId, questionId, answer, points, score))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import './index.css'

const InteractiveRatingComponent = () => {

    const [ratingState, setRatingState] = useState(Array(5).fill(['rating-number']))
    const [selectedRatingNumber, setSelectedRatingNumber] = useState(null)
    const [container1Display, setContainer1Display] = useState('grid');
    const [container2Display, setContainer2Display] = useState('none');
    
    
    const handleSubmit = () => {
        if (selectedRatingNumber === null) return 
        
        setContainer1Display('none');
        setContainer2Display('grid');
    };
    
    
    
    const clickRatingNumber = (value) => {
        setSelectedRatingNumber(value)
        console.log(selectedRatingNumber)
        setRatingState(ratingState => {
          return ratingState.map((rating, index) => {
            if (index === value - 1) {
              return [...rating, 'active'];
            } else {
              return rating.filter(className => className === 'rating-number');
            }
          });
        });

    };

    return (
        <>
            <div className='main-container' style={{display: container1Display}}>
                <div className='icon-star-container'>
                    <img src="src\assets\icon-star.svg"  className='icon-star-img' alt=''/>
                    
                </div>

                <h1 className='question'>How did we do?</h1>

                <p className="feedback">Please let use know how we did with your support<br></br>request. All feedback is appreaciated to help us <br /> improve our offering!</p>
                
                <ul>
                    <RatingNumberButtons className={ratingState[0]} value={1} onRatingClick={() => clickRatingNumber(1)} />
                    <RatingNumberButtons className={ratingState[1]} value={2} onRatingClick={() => clickRatingNumber(2)} />
                    <RatingNumberButtons className={ratingState[2]} value={3} onRatingClick={() => clickRatingNumber(3)} />
                    <RatingNumberButtons className={ratingState[3]} value={4} onRatingClick={() => clickRatingNumber(4)} />
                    <RatingNumberButtons className={ratingState[4]} value={5} onRatingClick={() => clickRatingNumber(5)} />
                </ul>
                <Button selectedRatingNumber = {selectedRatingNumber} onButtonClick = {handleSubmit}/>
            </div>

            <div className='thanks-container' style={{display: container2Display}}>
                <div className='phone-image grid-item'>
                    <img className='phone'src="src\assets\illustration-thank-you.svg" alt=''/>
                </div>

                <SelectedRangeThanks selectedRatingNumber={selectedRatingNumber}/>

            </div>
        </>
    )
}


const RatingNumberButtons = ({value,onRatingClick,className}) => {
    return (
        <>
            <li className={className.join(' ')} onClick={onRatingClick}>{value}</li>
        </>
    )
}

const Button = ({onButtonClick}) => {
    return (
        <>
            <button onClick={onButtonClick}>SUBMIT</button>
        </>
    )
}

const SelectedRangeThanks = ({selectedRatingNumber}) => {
    return (
        <>
            <p className='selected-range grid-item'>You selected {selectedRatingNumber} out of 5</p>

            <p className='thank-you grid-item'>Thank You!</p>

            <p className='thank-you-paragraph grid-item'>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to
            get in touch!</p>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<InteractiveRatingComponent/>)
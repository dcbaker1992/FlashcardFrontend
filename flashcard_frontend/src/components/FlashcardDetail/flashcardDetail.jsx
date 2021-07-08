import React, { useState } from 'react';
import EditCard from '../EditFlashcards/editFlashcards';


function FlashcardDetail(props) {

    const [flashcardNumber, setFlashcardNumber] = useState(0);

    if(props.flashcards.length === 0){
        return(null)
    }

    else{
        function goToNextCard(){
            let tempFlashCardNumber = flashcardNumber;
            tempFlashCardNumber++;
            if(tempFlashCardNumber === props.flashcards.length){
                tempFlashCardNumber = 0;
            }
            setFlashcardNumber(tempFlashCardNumber)
        }

        function goToPreviousCard(){
            let tempFlashCardNumber = flashcardNumber;
            tempFlashCardNumber--;
            if(tempFlashCardNumber < 0){
                tempFlashCardNumber = props.flashcards.length - 1
            }
            setFlashcardNumber(tempFlashCardNumber)
        }

        return(
            <div className='row row-spacer bg-dark text-light'>
                <div className ='col-md-4'>
                    <button class="btn btn-success" onClick={() => goToPreviousCard()}>Previous Card</button>
                </div>
                <div className='col-md-4'>
                    <h1>{props.flashcards[flashcardNumber].question}</h1>
                    <h4>{props.flashcards[flashcardNumber].answer}</h4>
                    <h2>{flashcardNumber + 1}/{props.flashcards.length}</h2>
                </div>
                <div className='col-md-4'>
                    <button class="btn btn-success" onClick={() => goToNextCard()}>Next Card</button>
                </div>
                <EditCard cards={props.flashcards[flashcardNumber]} collections={props.collections}
                            selectedCollection={props.selectedCollection}/>
            </div>
    )}
}

export default FlashcardDetail;
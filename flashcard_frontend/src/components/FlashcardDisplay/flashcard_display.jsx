import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FlashcardDisplay(props){

    let flashcard= props.flashcards.map(function(flashcard){
        return<ul key={flashcard.id}>
            {flashcard.collection}-{flashcard.question} = {flashcard.answer}
        </ul>
    });

    return(
        <div className="container">
            <h1><u>Flashcards</u></h1>
            <h5>{flashcard}</h5>
        </div>
    )
}

export default FlashcardDisplay;
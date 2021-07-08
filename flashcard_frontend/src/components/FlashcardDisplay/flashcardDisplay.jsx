import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FlashcardDetail from '../FlashcardDetail/flashcardDetail';

function FlashcardDisplay(props){

    props.flashcards.map(flashcards => { 
        return <li key={flashcards.id}>
            {flashcards.question} - {flashcards.answer}</li>
    });

    return(
        <div className="container">
                <ul>
                    <FlashcardDetail flashcards={props.flashcards} collections={props.collectios}
                                selectedCollection={props.selectedCollection}/>
                </ul>  
        </div>
    )
}

export default FlashcardDisplay;
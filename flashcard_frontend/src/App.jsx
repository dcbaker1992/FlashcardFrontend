import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import CollectionsDisplay from './components/CollectionsDisplay/collections_display';
import FlashcardDisplay from './components/FlashcardDisplay/flashcard_display';


function App() {
  const [collections, setCollections] = useState([]);
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    getCollections();
    getFlashcards();
  }, []);
  
  let getCollections = async () => {
    try{
      let response= await axios.get('http://127.0.0.1:8000/collections/');
      setCollections(response.data)
    }
    catch(err) {
      console.log(err);
    }
  }
  
  let getFlashcards = async () => {
    try{
      let response = await axios.get('http://127.0.0.1:8000/flashcards/');
      setFlashcards(response.data)
    }
    catch(err) {
      console.log(err);
    }
  }


  return(
    <div>
      <CollectionsDisplay collections={collections} flashcard={flashcards}/>
      <FlashcardDisplay flashcards={flashcards} />
    </div>
  );

}

export default App;
import React, { useState } from 'react';
import axios from 'axios'
import FormHandler from '../FormHandler/formHandler';

const CreateFlashcard = (props) => {
    const { values, handleChange, handleSubmit } = FormHandler(createFlashcards);
    const [flashcards, setFlashcards] = useState(props.flashcards)


    async function createFlashcards() {
        const addFlashcards = {...values, collection: props.selectedCollection};
        console.log(addFlashcards);  // test
        try{
            console.log("create a card request is called")  // test
            let response = await axios.post(`http://127.0.0.1:8000/flashcards/`, addFlashcards)
            setFlashcards(response.data)
        }
        catch (err) {
            console.log(err);
        }
    }


    return (
        <div className="container bg-dark">
            <h1>Add A New Card: </h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Collection Id: 
                    <input type="text" name="collection" onChange={handleChange} value={values.collection} required={true}/>
                </label>
                <label>
                    Question: 
                    <input type="text" name="question" onChange={handleChange} value={values.question} required={true}/>
                </label>
                <label>
                    Answer: 
                    <input type="text" name="answer" onChange={handleChange} value={values.answer} required={true}/>
                </label>
                <button type="submit" class="btn btn-success">Add Card</button>
            </form>
            <br/>
        </div>
    )
}

export default CreateFlashcard;
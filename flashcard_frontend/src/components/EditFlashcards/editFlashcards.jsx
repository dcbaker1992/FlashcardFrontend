import React, { useState } from 'react';
import axios from 'axios'
import FormHandler from '../FormHandler/formHandler';


const EditCard = (props) => {
    const { values, handleChange, handleSubmit } = FormHandler(() => editCard(props.flashcards.id, values));
    const [flashcards, setFlashcards] = useState(props.flashcards);

    async function editCard(id, values) {
        const editFlashcard = {collection: props.flashcards.collection, ...values};
        try{
            console.log("edit a card request is called")  // test
            let response = await axios.put(`http://127.0.0.1:8000/collections/flashcards/${id}/${id}/`, editFlashcard)
        setFlashcards(response.data)
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="container">
            <h6>Edit Card: </h6>
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
                <button type="submit" class="btn btn-success">Edit Card</button>
            </form>
            <br/>
        </div>
    )
    

}

export default EditCard;
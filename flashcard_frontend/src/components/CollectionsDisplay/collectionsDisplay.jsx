import React, { useState, useEffect } from 'react';
import axios from 'axios';


function CollectionsDisplay(props){

    let collections= props.collections.map(collection => {
        if(props.selectedCollection == collection.id){
            return <ul onClick={() => props.getFlashcards(collection.id)}  key={collection.id}>{collection.id}:     {collection.name}</ul>
        }
        else{
            return <ul onClick={() => props.getFlashcards(collection.id)}  key={collection.id}>{collection.id}:    {collection.name}</ul>
        }
    });

    return(
        <div className="container bg-dark">
            <h1><u>Collections:</u></h1>
            <p>(Please click on a collection below to display cards)</p>
            <h5>{collections}</h5>
            <br/>
        </div>
    )
}

export default CollectionsDisplay
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function CollectionsDisplay(props){

    let collections= props.collections.map(function(collection){
        return<ul key={collection.id}>
            {collection.id}-{collection.name}
        </ul>
    });

    return(
        <div className="container">
            <h1><u>Collections</u></h1>
            <h5>{collections}</h5>
        </div>
    )
}

export default CollectionsDisplay
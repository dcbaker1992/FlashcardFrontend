import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import CollectionsDisplay from './components/CollectionsDisplay/collections_display';


function App() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    getCollections();
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
  
  
  return(
    <div>
      <CollectionsDisplay collections={collections}/>
    </div>
  );

}

export default App;
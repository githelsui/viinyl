import React, {useState, useEffect} from "react";
import './ProfileTabs.css'
import { Grid } from '@material-ui/core';
import Vinyl from '../Vinyl';
import { db } from '../../util/firebase';
import {ref, set, onValue, remove } from "firebase/database";

const ProfileCollectionTab = () => {
  const [loginData, setLoginData] = useState(); 
  const [emptyStatus, setCollectionStatus] = useState(true); 
  const [collectionList, setCollectionList] = useState([]); 

  const fetchCollection = (user) => {
    console.log(user.id)
    var collection = []
    onValue(ref(db, 'collection/' + `/${user.id}`), snapshot => {
      const data = snapshot.val();
      if(data){
          for(var key in data) {
            var album = data[key]
            collection.push(album)
          }
      } 
      setCollectionList(collection);
      if(collection.length == 0) {
        setCollectionStatus(true)
      } else {
        setCollectionStatus(false)
      }
  });
  }

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
        var data = JSON.parse(loggedInUser);
        setLoginData(data);
        fetchCollection(data);
    }
   }, []);


  return (
    <div className="ProfileCollectionTab">
      {emptyStatus ?  <p>0 albums in collection</p> :
         <div className='vinyl-grid'>
         <Grid container justify='center' spacing={10}>
         {collectionList.map(function(vinyl, i){
             return <Grid item key={i}>
             <Vinyl item={vinyl}/>
         </Grid>
         })}
         </Grid>
     </div>
      }
    </div>
  );
};
export default ProfileCollectionTab;

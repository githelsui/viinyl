import React, {useState, useEffect}  from "react";
import './ProfileTabs.css'
import { Grid } from '@material-ui/core';
import Vinyl from '../Vinyl';
import { db } from '../../util/firebase';
import {ref, set, onValue, remove } from "firebase/database";

const ProfileWishlistTab = () => {
  const [loginData, setLoginData] = useState(); 
  const [emptyStatus, setWishlistStatus] = useState(true); 
  const [wishList, setWishlist] = useState([]); 

  const fetchWishlist = (user) => {
    console.log(user.id)
    var wishlist = []
    onValue(ref(db, 'wishlist/' + `/${user.id}`), snapshot => {
      const data = snapshot.val();
      if(data){
          for(var key in data) {
            var album = data[key]
            wishlist.push(album)
          }
      } 
      setWishlist(wishlist);
      if(wishlist.length == 0) {
        setWishlistStatus(true)
      } else {
        setWishlistStatus(false)
      }
  });
  }

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
        var data = JSON.parse(loggedInUser);
        setLoginData(data);
        fetchWishlist(data);
    }
   }, []);

  return (
    <div className="ProfileWishlistTab">
      {emptyStatus ?  <p>0 albums in wishlist</p> :
         <div className='vinyl-grid'>
         <Grid container justify='center' spacing={10}>
         {wishList.map(function(vinyl, i){
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
export default ProfileWishlistTab;
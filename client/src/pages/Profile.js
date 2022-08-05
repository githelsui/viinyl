import React, { useState, useEffect }  from "react";
import './Profile.css'
import '../components/Tabs.css'
import ProfileCollectionTab from '../components/ProfileTabs/ProfileCollectionTab';
import ProfileWishlistTab from '../components/ProfileTabs/ProfileWishlistTab';
import ProfileFriendsTab from '../components/ProfileTabs/ProfileFriendsTab';
import { Link } from 'react-router-dom'

const Profile = ({account}) => {
  const [activeTab, setActiveTab] = useState("CollectionTab");
  const [loginData, setLoginData] = useState(''); 

  //  Functions to handle Tab Switching
  const setCollectionTab = () => {
    // update the state to Collections Tab
    setActiveTab("CollectionTab");
  };
  const setWishlistTab = () => {
    // update the state to Wishlist Tab
    setActiveTab("WishlistTab");
  };
  const setFriendsTab = () => {
    // update the state to Wishlist Tab
    setActiveTab("FriendsTab");
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
        setLoginData(JSON.parse(loggedInUser));
        console.log(loginData.fullName)
    }
    console.log(loginData)
   }, []);

    return (
        <div className="profile-wrapper">
            <div className="profile">
                {loginData ? <div className="username">{loginData.fullName}</div> : <div className="username">Username</div>}
                <div className="stats">
                    <a onClick={setCollectionTab}>
                        <div className="records">{loginData.collection_count} in collection</div>
                     </a>
                    <a onClick={setWishlistTab}>
                         <div className="wishes">{loginData.wishlist_count} in wishlist</div>
                    </a>
                    <a onClick={setFriendsTab}>
                         <div className="friends">{loginData.friend_count} friends</div>
                     </a>
                </div>
            </div>
     <div className="Tabs">
      <ul className="nav">
                <li className={activeTab === "CollectionTab" ? "active" : ""} onClick={setCollectionTab}>Collection</li>
                <li className={activeTab === "WishlistTab" ? "active" : ""}  onClick={setWishlistTab}>Wishlist</li>
                <li className={activeTab === "FriendsTab" ? "active" : ""}  onClick={setFriendsTab}>Friends</li>
        </ul>
            <div className="outlet">
                {activeTab === "CollectionTab" ? <ProfileCollectionTab /> : null}
                {activeTab === "WishlistTab" ? <ProfileWishlistTab /> : null}
                {activeTab === "FriendsTab" ? <ProfileFriendsTab/> : null }
            </div>
            </div>
        </div>
    )
}

export default Profile;
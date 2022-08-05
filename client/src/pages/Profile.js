import React, { useState }  from "react";
import './Profile.css'
import '../components/Tabs.css'
import ProfileCollectionTab from '../components/AllTabs/ProfileCollectionTab';
import ProfileWishlistTab from '../components/AllTabs/ProfileWishlistTab';
import { Link } from 'react-router-dom'

const Profile = ({account}) => {
  const [activeTab, setActiveTab] = useState("CollectionTab");

  //  Functions to handle Tab Switching
  const setCollectionTab = () => {
    // update the state to Collections Tab
    setActiveTab("CollectionTab");
  };
  const setWishlistTab = () => {
    // update the state to Wishlist Tab
    setActiveTab("WishlistTab");
  };

    return (
        <div className="profile-wrapper">
            <div className="profile">
                <div className="username">githel</div>
                <div className="stats">
                    <Link to="/">
                        <div className="records">20 in collection</div>
                     </Link>
                    <Link to="/" >
                    <div className="wishes">0 in wishlist</div>
                    </Link>
                    <Link to="/" >
                    <div className="friends">3 friends</div>
                        </Link>
                </div>
            </div>
            {/* Tabs */}
            <div className="Tabs">
      <ul className="nav">
                <li className={activeTab === "CollectionTab" ? "active" : ""} onClick={setCollectionTab}>Collection</li>
                <li className={activeTab === "WishlistTab" ? "active" : ""}  onClick={setWishlistTab}>Wishlist</li>
        </ul>
            <div className="outlet">
                {activeTab === "CollectionTab" ? <ProfileCollectionTab /> : null}
                {activeTab === "WishlistTab" ? <ProfileWishlistTab /> : null}
                {activeTab === "FriendsTab" ? null : null }
            </div>
            </div>
        </div>
    )
}

export default Profile;
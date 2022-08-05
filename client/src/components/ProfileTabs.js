import React, { useState } from "react";
import './Tabs.css'
import ProfileCollectionTab from './AllTabs/ProfileCollectionTab';
import ProfileWishlistTab from './AllTabs/ProfileWishlistTab';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("CollectionTab");

  //  Functions to handle Tab Switching
  const handleTab1 = () => {
    // update the state to Collections Tab
    setActiveTab("CollectionTab");
  };
  const handleTab2 = () => {
    // update the state to Wishlist Tab
    setActiveTab("WishlistTab");
  };

  return (
    <div className="Tabs">
      {/* Tab nav */}
      <ul className="nav">
        <li className={activeTab === "CollectionTab" ? "active" : ""} onClick={handleTab1}>Collection</li>
        <li className={activeTab === "WishlistTab" ? "active" : ""}  onClick={handleTab2}>Wishlist</li>
      </ul>
      <div className="outlet">
        {activeTab === "CollectionTab" ? <ProfileCollectionTab /> : <ProfileWishlistTab />}
      </div>
    </div>
  );
};

export default Tabs;
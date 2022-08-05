import React, { useState } from "react";
import './Tabs.css'
import SearchedResultsTab from './SearchedResultsTab.';
import UsersResultsTab from './UsersResultsTab';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("ReleasesTab");

  //  Functions to handle Tab Switching
  const handleTab1 = () => {
    // update the state to Collections Tab
    setActiveTab("ReleasesTab");
  };
  const handleTab2 = () => {
    // update the state to Wishlist Tab
    setActiveTab("UsersTab");
  };

  return (
    <div className="Tabs">
      {/* Tab nav */}
      <ul className="nav">
        <li className={activeTab === "ReleasesTab" ? "active" : ""} onClick={handleTab1}>Albums</li>
        <li className={activeTab === "UsersTab" ? "active" : ""}  onClick={handleTab2}>Users</li>
      </ul>
      <div className="outlet">
        {activeTab === "ReleasesTab" ? <SearchedResultsTab /> : <UsersResultsTab />}
      </div>
    </div>
  );
};

export default Tabs;
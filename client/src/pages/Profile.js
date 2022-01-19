import React from "react";
import './Profile.css'
import Vinyls from '../components/Vinyls';
import { Link } from 'react-router-dom'

const Profile = ({account}) => {
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
            <Vinyls/>
        </div>
    )
}

export default Profile;
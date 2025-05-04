import { useState } from "react";
import "./userButton.css";
import Image from "../image/Image";

const UserButton = () => {
    const [open, setOpen] = useState(false);
    const currentUser = true;
    return currentUser ? (
        <div className="userButton">
            <Image path="/general/noAvatar.png" alt="" />
            <Image
                path="/general/arrow.svg"
                alt=""
                className="arrow"
                onClick={() => setOpen((prev) => !prev)}
            />
            {open && (
                <div className="userOptions">
                    <div className="userOption">Profile</div>
                    <div className="userOption">Setting</div>
                    <div className="userOption">Logout</div>
                </div>
            )}
        </div>
    ) : (
        <a href="/" className="loginLink">
            Login / Sign Up
        </a>
    );
};

export default UserButton;

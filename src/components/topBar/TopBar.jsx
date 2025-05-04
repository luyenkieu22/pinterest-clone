import Image from "../image/Image"
import UserButton from "../userButton/UserButton"
import "./topBar.css"

const TopBar = () => {
    return (
        <div className="topBar">
            {/* SEARCH */}
            <div className="search">
                <Image path="/general/search.svg" alt="" />
                <input type="text" placeholder="Search" />
            </div>
            {/* USER BUTTON */}
            <UserButton />
        </div>
    )
}

export default TopBar
import "./mainLayout.css"
import { Outlet } from "react-router"
import LeftBar from '../../components/leftBar/LeftBar'
import TopBar from '../../components/topBar/TopBar'

const MainLayout = () => {
    return (
        <div className='app'>
            <LeftBar />
            <div className="content">
                <TopBar />
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout
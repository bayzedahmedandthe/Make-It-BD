import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex items-center gap-12">
            <div className="w-64 min-h-full bg-rose-300">
                <NavLink to="/dashboard/userdashboard"> Dashboard </NavLink>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
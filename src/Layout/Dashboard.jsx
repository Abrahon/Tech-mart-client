import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome } from 'react-icons/fa';
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [cart] = useCart()

    const [isAdmin] = useAdmin();
    // const isAdmin=true;
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-blue-900">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80  text-white ">
                    {/* Sidebar content here */}
                    {
                        isAdmin ? <>
                            <li className='bg-none'><NavLink to="/dashboard"><FaHome></FaHome>Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/additem"><FaCalendarAlt></FaCalendarAlt>AddItem</NavLink></li>
                            <li><NavLink to="/dashboard/manageitem"><FaWallet></FaWallet>Manage Items</NavLink></li>
                            <li><NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart>Manage Bookings</NavLink></li>
                            <li ><NavLink to='/dashboard/alluser'><FaHome></FaHome>All User</NavLink> </li>
                            
                        </> : <>
                            <li className='bg-none'><NavLink to="/dashboard"><FaHome></FaHome>User Home</NavLink></li>
                            <li><NavLink to="/dashboard/mycart"><FaCalendarAlt></FaCalendarAlt>Reservation</NavLink></li>
                            <li><NavLink to="/dashboard/mycart"><FaWallet></FaWallet>Payment History</NavLink></li>
                            <li><NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart>My Cart</NavLink></li>
                            <div className='divider'></div>
                            <li ><NavLink to='/'><FaHome></FaHome>Home</NavLink> </li>
                            <li ><NavLink to='/menu'>Menu</NavLink> </li>
                            <li><NavLink to='/order/salad'>Order</NavLink> </li>

                        </>
                    }


                </ul>

            </div>
        </div>
    );
};

export default Dashboard;
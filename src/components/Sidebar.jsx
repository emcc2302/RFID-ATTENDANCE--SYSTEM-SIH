import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar({ userRole, loggedInUser }) {
    const renderNavLinks = () => {
        switch (userRole) {
            case 'student':
                return (
                    <>
                        <li><NavLink to="/student-dashboard">Dashboard</NavLink></li>
                        <li><NavLink to="/my-profile">My Profile</NavLink></li>
                        <li><NavLink to="/attendance">Attendance</NavLink></li>
                        <li><NavLink to="/reports">Reports</NavLink></li>
                        <li><NavLink to="/settings">Settings</NavLink></li>
                    </>
                );
            case 'teacher':
                return (
                    <>
                        <li><NavLink to="/teacher-dashboard">Dashboard</NavLink></li>
                        <li><NavLink to="/students">Students</NavLink></li>
                        <li><NavLink to={`/teacher-profile/${loggedInUser?.id}`}>My Profile</NavLink></li>
                        <li><NavLink to="/attendance">Attendance</NavLink></li>
                        <li><NavLink to="/reports">Reports</NavLink></li>
                    </>
                );
            case 'school':
                return (
                    <>
                        <li><NavLink to={`/school-dashboard/${loggedInUser?.id}`}>Dashboard</NavLink></li> {/* Fix: Dynamic link */}
                        <li><NavLink to="/school-students">Students</NavLink></li>
                        <li><NavLink to="/school-teachers">Teachers</NavLink></li>
                        <li><NavLink to="/school-reports">Reports</NavLink></li>
                    </>
                );
            case 'govt':
                return (
                    <>
                        <li><NavLink to="/govt-dashboard">All Schools</NavLink></li>
                        <li><NavLink to="/govt-reports">Reports</NavLink></li>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="sidebar">
            <h2>{userRole.toUpperCase()} Dashboard</h2>
            <ul>
                {renderNavLinks()}
            </ul>
        </div>
    );
}

export default Sidebar;
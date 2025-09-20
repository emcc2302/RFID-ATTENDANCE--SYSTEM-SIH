import React from 'react';

function Header({ userRole, onLogout }) {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className="header">
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <h1>Attendance Dashboard</h1>
                <p style={{fontSize: '14px', color: '#666'}}>{formattedDate}</p>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <p style={{marginRight: '15px'}}>Logged in as: <strong>{userRole}</strong></p>
                <button onClick={onLogout}>Logout</button>
            </div>
        </div>
    );
}

export default Header;
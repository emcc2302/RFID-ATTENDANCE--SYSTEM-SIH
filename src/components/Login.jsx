import React, { useState } from 'react';

function Login({ onLogin }) {
    const [role, setRole] = useState(null);
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        onLogin(role, identifier, password);
    };

    const getPlaceholder = () => {
        switch (role) {
            case 'student': return 'Roll Number (e.g., CSE234055)';
            case 'teacher': return 'Teacher ID (e.g., TCH101)';
            case 'school': return 'Username (e.g., SCH001)';
            case 'govt': return 'Username (e.g., govt-admin)';
            default: return '';
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                {!role ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <h2 style={{ marginBottom: '20px' }}>Choose Your Role</h2>
                        <button className="student-btn" onClick={() => setRole('student')}>Student Login</button>
                        <button className="teacher-btn" onClick={() => setRole('teacher')}>Teacher Login</button>
                        <button className="school-btn" onClick={() => setRole('school')}>School Login</button>
                        <button className="govt-btn" onClick={() => setRole('govt')}>Govt Login</button>
                    </div>
                ) : (
                    <>
                        <h2>{role.charAt(0).toUpperCase() + role.slice(1)} Login</h2>
                        <form onSubmit={handleLogin}>
                            <input
                                type="text"
                                placeholder={getPlaceholder()}
                                value={identifier}
                                onChange={(e) => setIdentifier(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button type="submit" className={`${role}-btn`}>
                                Login
                            </button>
                        </form>
                        <button onClick={() => setRole(null)} style={{ marginTop: '10px', background: 'transparent', color: '#6c757d', border: 'none', cursor: 'pointer' }}>
                            &larr; Back to Role Selection
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default Login;
import React from 'react'
import { useState } from 'react'

function ConditionalRenderComponent() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    }

    const handleLogout = () => {
        setIsLoggedIn(false);
    }

    return (
        <div>
            <h2>Task 3 - Conditional Rendering</h2>
            {isLoggedIn ? (
                <div>
                    <p>Welcome! You are logged in.</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <>
                    <button onClick={handleLogin}>Login</button>
                    {isLoggedIn && <p>Please wait while logging in...</p>}
                </>
            )}
        </div>
    )
}

export default ConditionalRenderComponent
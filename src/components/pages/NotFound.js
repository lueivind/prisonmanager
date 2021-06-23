import React from 'react'

//routing
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div>
            <Link to="/">
                <h3 className="link" style={{ margin: "2px" }}>Return</h3>
            </Link>
            <h1>404</h1>
            <h1>You're not supposed to be here.</h1>
        </div>
    )
}

import React from 'react'

// routing
import { Link } from 'react-router-dom'

export default function Testing() {
    return (
        <div>
            <Link to="/">
                <h3 className="link" style={{ margin: "2px" }}>Return</h3>
            </Link>
            <h1>INTERROGATION</h1>
        </div>
    )
}





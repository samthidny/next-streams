import Link from 'next/link'
import React from 'react'
import './navigation.css';

export default async function Navigation() {

    return (

        <header className="NavBar">
            <Link href="/" className="logo-link">
                <div className="logo logo-font">STREAMS</div>
            </Link>
            <div className="menu">
                <ul>
                    {/* <li><Link href="/login">Login</Link></li> */}
                </ul>
            </div>

        </header>
    )
}



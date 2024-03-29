import Link from 'next/link'
import React from 'react'
import './navigation.css';

type NavigationProps = {
    isAuthorised: Boolean
}

export default async function Navigation(props:NavigationProps) {

    return (

        <header className="NavBar">
            <Link href="/" className="logo-link">
                <div className="logo logo-font">STREAMS</div>
            </Link>
            <div className="menu">
                <ul>
                    {!props.isAuthorised ? <li><Link href="/signin">Signin</Link></li> : ''}
                </ul>
            </div>

        </header>
    )
}



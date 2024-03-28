'use client'
import { useRouter } from 'next/navigation';
import './back-button.css';

export function BackButton() {

   
    const router = useRouter()

    return <button className="back-button" onClick={() => router.back()}>
        
        <div className="icon">
            <svg fill="green" width="1em" height="1em" viewBox="-6.4 -6.4 32 44.80" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#4bf91a" transform="matrix(1, 0, 0, 1, 0, 0)" strokeWidth="0.0002"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#ffffff" strokeWidth="2.6"> <title>back</title> <path d="M15.281 7.188v17.594l-15.281-8.781z"></path> </g><g id="SVGRepo_iconCarrier"> <title>back</title> <path d="M15.281 7.188v17.594l-15.281-8.781z"></path> </g></svg>
        </div>
        BACK</button>
}
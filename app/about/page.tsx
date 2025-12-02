import { Metadata } from 'next'
import React from 'react'
import PersonalInfo from './_components/personal-info'
import AboutHero from './_components/about'

export const metadata: Metadata = {
    title: 'About Me - Sahed Rahman',
    description: 'Learn more about Sahed Rahman, a professional Full Stack Developer specializing in MERN stack development, React.js, Node.js, Express.js, and MongoDB.',
}

export default function page() {
    return (
        <>
            <AboutHero />
            <PersonalInfo />
        </>
    )
}

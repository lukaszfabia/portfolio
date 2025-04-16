'use client';


import { Home } from '@/components/home';
import { Projects } from '@/components/projects';
import { AboutMe } from '@/components/aboutme';
import React from 'react';
import ProgressBar from '@/components/ui/bars/progress-bar';
import { FadeInSection } from '@/components/animations/fadeInSection';


export default function Index() {

    // register your elements here
    const components: { Component: React.ComponentType; key: string }[] = [
        { Component: Home, key: 'home' },
        { Component: Projects, key: 'projects' },
        { Component: AboutMe, key: 'aboutme' },
        // { Component: Contact, key: 'contact' }
    ];

    return (
        <>
            <ProgressBar />
            {components.map(({ Component, key }) => (
                <Component key={key} />
            ))}
        </>
    );
}

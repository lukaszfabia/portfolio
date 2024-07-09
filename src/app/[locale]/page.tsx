'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { Home } from '@/components/home';
import { Projects } from '@/components/projects';
import { AboutMe } from '@/components/aboutme';
import { Contact } from '@/components/contact';

export default function Index() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });


    return (
        <>
            <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gray-500 z-30" style={{ scaleX: scaleX, transformOrigin: "0%" }} />
            <main className='p-8 md:p-32 mt-10'>
                <Home />
                <Projects />
                <AboutMe />
                <Contact />
            </main>
        </>
    );
}
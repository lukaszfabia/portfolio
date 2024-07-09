import { useAnimation, motion } from 'framer-motion';
import React, { ReactNode, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export const FadeInSection: React.FC<{
    children: ReactNode;
    delay?: number;
}> = ({ children, delay = 0 }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 0.6, delay }}
        >
            {children}
        </motion.div>
    );
};

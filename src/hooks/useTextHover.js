import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const FONT_WEIGHTS = {
    subtitle: { min: 100, max: 400, default: 100 },
    title: { min: 300, max: 800, default: 300 },
};

const setupTextHover = (container, type) => {
    if (!container) return () => { };
    const letters = container.querySelectorAll('span');
    const { min, max, default: base } = FONT_WEIGHTS[type];

    const animateLetter = (letter, weight, duration = 0.25) => {
        return gsap.to(letter, {
            fontVariationSettings: `"wght" ${weight}`,
            duration,
            ease: 'power2.out',
        });
    };

    const handleMouseMove = (event) => {
        const { left } = container.getBoundingClientRect();
        const mousex = event.clientX - left;
        letters.forEach((letter) => {
            const { left: l, width: w } = letter.getBoundingClientRect();
            const distance = Math.abs(mousex - (l - left + w / 2));
            const intensity = Math.exp(-(distance ** 2) / 20000);
            const targetWeight = min + (max - min) * intensity;
            animateLetter(letter, targetWeight, 0.1);
        });
    };

    const handleMouseLeave = () => {
        letters.forEach((letter) => {
            animateLetter(letter, base, 0.5);
        });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
    };
};

export const useTextHover = (type) => {
    const ref = useRef(null);

    useGSAP(() => {
        return setupTextHover(ref.current, type);
    }, [type]);

    const getBaseWeight = () => FONT_WEIGHTS[type].default;

    return { ref, getBaseWeight };
};
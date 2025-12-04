import { useState, useEffect } from 'react';
import dayjs from 'dayjs';

export const useCurrentTime = () => {
    const [currentTime, setCurrentTime] = useState(dayjs());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(dayjs());
        }, 1000);

        return () => clearInterval(intervalId); 
    }, []);  

    return currentTime; 
};
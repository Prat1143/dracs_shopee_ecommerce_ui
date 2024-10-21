import React, { useState, useEffect } from 'react';

const FlipUnit = ({ value, label }) => {
    const [flip, setFlip] = useState(false);

    useEffect(() => {
        setFlip(true);
        const timer = setTimeout(() => setFlip(false), 500);
        return () => clearTimeout(timer);
    }, [value]);

    return (
        <div className="flex flex-col items-center">
            <div className="relative bg-white text-primary rounded-lg shadow-lg p-3 mb-2 w-16 h-20">
                <div className={`absolute inset-0 flex items-center justify-center ${flip ? 'animate-flip-down' : ''}`}>
                    <span className="text-3xl font-bold">{value.toString().padStart(2, '0')}</span>
                </div>
            </div>
            <span className="text-sm font-medium text-gray-200">{label}</span>
        </div>
    );
};

const SaleCountdownBanner = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const countDownDate = new Date("2024-11-08T23:59:59").getTime();

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });

            if (distance < 0) {
                clearInterval(timer);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-gradient-to-r from-primary to-secondary mt-12 rounded-xl overflow-hidden shadow-lg">
            <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between">
                <div className="text-center md:text-left mb-6 md:mb-0">
                    <h2 className="text-4xl font-bold mb-4 text-white">Flash Sale Coming Soon!</h2>
                    <div className="flex space-x-4 justify-center md:justify-start">
                        <FlipUnit value={timeLeft.days} label="Days" />
                        <FlipUnit value={timeLeft.hours} label="Hours" />
                        <FlipUnit value={timeLeft.minutes} label="Minutes" />
                        <FlipUnit value={timeLeft.seconds} label="Seconds" />
                    </div>
                </div>
                <div className="relative">
                    <img
                        src="https://via.placeholder.com/400x300"
                        alt="Sale"
                        className="rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-0 right-0 bg-accent text-white text-xl font-bold py-2 px-4 rounded-bl-lg">
                        50% OFF
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SaleCountdownBanner;
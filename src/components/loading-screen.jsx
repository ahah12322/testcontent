import { useEffect, useState } from 'react';
import LoadingGif from '@/assets/images/loading-logo.gif';

const DURATION = 2800;

const LoadingScreen = ({ onDone }) => {
    const [visible, setVisible] = useState(true);
    const [fading, setFading] = useState(false);

    useEffect(() => {
        const fadeTimer = setTimeout(() => setFading(true), DURATION);
        const doneTimer = setTimeout(() => {
            setVisible(false);
            onDone?.();
        }, DURATION + 600);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(doneTimer);
        };
    }, [onDone]);

    if (!visible) return null;

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 9999,
                backgroundColor: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: fading ? 0 : 1,
                transition: 'opacity 0.6s ease',
                pointerEvents: fading ? 'none' : 'auto',
            }}
        >
            <img
                src={LoadingGif}
                alt="Loading"
                style={{ width: '320px', maxWidth: '80vw' }}
                draggable={false}
            />
        </div>
    );
};

export default LoadingScreen;

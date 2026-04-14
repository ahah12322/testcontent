import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import '@/assets/css/bootstrap.min.css';
import '@/assets/css/style.css';
import { RouterProvider } from 'react-router';
import router from '@/router/router';
import { Analytics } from '@vercel/analytics/react';
import LoadingScreen from '@/components/loading-screen';

const App = () => {
    const [loaded, setLoaded] = useState(false);

    return (
        <>
            <LoadingScreen onDone={() => setLoaded(true)} />
            {loaded && <RouterProvider router={router} />}
            <Analytics />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);


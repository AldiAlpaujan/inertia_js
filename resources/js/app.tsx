import '@mantine/core/styles.css';
import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { MantineProvider } from '@mantine/core';
import { createRoot } from 'react-dom/client';
import theme from './themes/theme';
import PageLayout from './Layouts/PageLayout';
import { ReactNode } from 'react';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,

    resolve: (name) => {
        const pages = import.meta.glob('./Pages/**/*.tsx', { eager: true });
        let page = pages[`./Pages/${name}.tsx`] as any;

        if (name.startsWith('App/')) {
            page.default.layout = ((page: ReactNode) => <PageLayout children={page} />);
        }
        return page;
    },
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <MantineProvider theme={theme} forceColorScheme='light'>
                <App {...props} />
            </MantineProvider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});

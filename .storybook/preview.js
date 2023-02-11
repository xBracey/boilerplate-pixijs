import { RouterContext } from 'next/dist/shared/lib/router-context'; // next 12
import '../pages/globals.css';
import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat'; // load on demand

dayjs.extend(advancedFormat); // use plugin

export const parameters = {
    nextRouter: {
        Provider: RouterContext.Provider
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    },
    previewTabs: {
        'storybook/docs/panel': { index: -1 }
    }
};

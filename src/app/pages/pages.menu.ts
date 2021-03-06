import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
    {
        title: 'Dashboard',
        icon: 'fa fa-archive',
        link: '/pages/dashboard',
        home: true,
    },
    {
        title: 'IoT Dashboard',
        icon: 'fa fa-home',
        link: './dashboard',
    },
    {
        title: 'FEATURES',
        group: true,
    },
    {
        title: 'Extra Components',
        icon: 'fa fa-star',
        children: [
            {
                title: 'Calendar',
                link: '',
            },
            {
                title: 'Stepper',
                link: '',
            },
            {
                title: 'List',
                link: '',
            },
            {
                title: 'Infinite List',
                link: '',
            },
            {
                title: 'Accordion',
                link: '',
            },
            {
                title: 'Progress Bar',
                link: '',
            },
            {
                title: 'Spinner',
                link: '',
            },
            {
                title: 'Alert',
                link: '',
            },
            {
                title: 'Tree',
                link: '',
            },
            {
                title: 'Tabs',
                link: '',
            },
            {
                title: 'Calendar Kit',
                link: '',
            },
            {
                title: 'Chat',
                link: '',
            },
        ],
    },
]
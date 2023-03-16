import * as React from 'react';
import { Prism } from '@mantine/prism';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import duotoneDark from 'prism-react-renderer/themes/duotoneDark';
import duotoneLight from 'prism-react-renderer/themes/duotoneLight';

type LayoutProps = {
    children: React.ReactNode;
};
export const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className='bg-white'>
            {/* Header */}
            <div className='bg-gray-900'>
                <header className='absolute inset-x-0 top-0 z-50'>
                    <nav
                        className='flex items-center justify-between p-6 lg:px-8'
                        aria-label='Global'
                    >
                        <div className='flex lg:flex-1'>
                            <a href='#' className='-m-1.5 p-1.5'>
                                <span className='sr-only'>String Escaper</span>
                                <span className='text-white font-bold uppercase'>
                                    String Escaper
                                </span>
                            </a>
                        </div>
                        <div className='flex lg:hidden'>
                            <button
                                type='button'
                                className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400'
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <span className='sr-only'>Open main menu</span>
                                <Bars3Icon
                                    className='h-6 w-6'
                                    aria-hidden='true'
                                />
                            </button>
                        </div>
                        <div className='hidden lg:flex lg:gap-x-12'>
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className='text-sm font-semibold leading-6 text-white'
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                        {/* <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
                            <a
                                href='#'
                                className='text-sm font-semibold leading-6 text-white'
                            >
                                Log in <span aria-hidden='true'>&rarr;</span>
                            </a>
                        </div> */}
                    </nav>
                    <Dialog
                        as='div'
                        className='lg:hidden'
                        open={mobileMenuOpen}
                        onClose={setMobileMenuOpen}
                    >
                        <div className='fixed inset-0 z-50' />
                        <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10'>
                            <div className='flex items-center justify-between'>
                                <a href='#' className='-m-1.5 p-1.5'>
                                    <span className='sr-only'>
                                        Your Company
                                    </span>
                                    <img
                                        className='h-8 w-auto'
                                        src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
                                        alt=''
                                    />
                                </a>
                                <button
                                    type='button'
                                    className='-m-2.5 rounded-md p-2.5 text-gray-400'
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className='sr-only'>Close menu</span>
                                    <XMarkIcon
                                        className='h-6 w-6'
                                        aria-hidden='true'
                                    />
                                </button>
                            </div>
                            <div className='mt-6 flow-root'>
                                <div className='-my-6 divide-y divide-gray-500/25'>
                                    <div className='space-y-2 py-6'>
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className='-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-800'
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                    {/* <div className='py-6'>
                                        <a
                                            href='#'
                                            className='-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-800'
                                        >
                                            Log in
                                        </a>
                                    </div> */}
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Dialog>
                </header>

                <div className='relative isolate pt-14'>
                    <div className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
                        <svg
                            className='relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]'
                            viewBox='0 0 1155 678'
                        >
                            <path
                                fill='url(#f4773080-2a16-4ab4-9fd7-579fec69a4f7)'
                                fillOpacity='.2'
                                d='M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z'
                            />
                            <defs>
                                <linearGradient
                                    id='f4773080-2a16-4ab4-9fd7-579fec69a4f7'
                                    x1='1155.49'
                                    x2='-78.208'
                                    y1='.177'
                                    y2='474.645'
                                    gradientUnits='userSpaceOnUse'
                                >
                                    <stop stopColor='#9089FC' />
                                    <stop offset={1} stopColor='#FF80B5' />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className='py-24 sm:py-32 lg:pb-40'>
                        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                            <h1 className='text-3xl font-bold tracking-tight text-white sm:text-5xl'>
                                What is a string escaper?
                            </h1>
                            <p className='mt-6 text-lg leading-8 text-gray-300'>
                                This tool operates entirely within your web
                                browser, and its purpose is to add escape
                                slashes to strings that contain special
                                characters. This includes characters like
                                backslashes, tabs, newlines, single quotes, and
                                double quotes. The tool works by analyzing each
                                character in the input string and adding a
                                backslash before any special characters that it
                                detects. This process helps ensure that your
                                strings are properly formatted and can be used
                                in various programming contexts.
                            </p>
                            <div className='py-5 sm:py-10'>{children}</div>
                            {/* Content */}
                        </div>
                    </div>
                    <div className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'>
                        <svg
                            className='relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]'
                            viewBox='0 0 1155 678'
                        >
                            <path
                                fill='url(#ee0717bf-3e43-49df-b1bd-de36422ed3d3)'
                                fillOpacity='.2'
                                d='M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z'
                            />
                            <defs>
                                <linearGradient
                                    id='ee0717bf-3e43-49df-b1bd-de36422ed3d3'
                                    x1='1155.49'
                                    x2='-78.208'
                                    y1='.177'
                                    y2='474.645'
                                    gradientUnits='userSpaceOnUse'
                                >
                                    <stop stopColor='#9089FC' />
                                    <stop offset={1} stopColor='#FF80B5' />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>

            <main className='isolate'>
                <div className='relative isolate -z-10'>
                    <div className='absolute top-0 left-1/2 right-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48'>
                        <svg
                            viewBox='0 0 801 1036'
                            aria-hidden='true'
                            className='w-[50.0625rem]'
                        >
                            <path
                                fill='url(#70656b7e-db44-4b9b-b7d2-1f06791bed52)'
                                fillOpacity='.3'
                                d='m282.279 843.371 32.285 192.609-313.61-25.32 281.325-167.289-58.145-346.888c94.5 92.652 277.002 213.246 251.009-45.597C442.651 127.331 248.072 10.369 449.268.891c160.956-7.583 301.235 116.434 351.256 179.39L507.001 307.557l270.983 241.04-495.705 294.774Z'
                            />
                            <defs>
                                <linearGradient
                                    id='70656b7e-db44-4b9b-b7d2-1f06791bed52'
                                    x1='508.179'
                                    x2='-28.677'
                                    y1='-116.221'
                                    y2='1091.63'
                                    gradientUnits='userSpaceOnUse'
                                >
                                    <stop stopColor='#9089FC' />
                                    <stop offset={1} stopColor='#FF80B5' />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className='py-8 sm:py-15 lg:pb-20'>
                        <div className='mx-auto max-w-7xl px-6 py-10 lg:px-8'>
                            <div>
                                <span className='text-3xl py-6 font-bold tracking-tight text-gray-700 sm:text-5xl'>
                                    String escaper example
                                </span>
                            </div>
                            <div className='pt-8 sm:pt-10 grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8'>
                                {/* Left column */}
                                <div className='grid grid-cols-1 gap-4 lg:col-span-2'>
                                    <section aria-labelledby='section-1-title'>
                                        <h2
                                            className='sr-only'
                                            id='section-1-title'
                                        >
                                            Section title
                                        </h2>
                                        <div className='overflow-hidden rounded-lg bg-gray-700 shadow'>
                                            <div className='p-6'>
                                                <label
                                                    htmlFor='comment'
                                                    className='block text-md font-bold leading-6 text-white'
                                                >
                                                    Multiline Text
                                                </label>
                                                <div className='py-2'>
                                                    {' '}
                                                    <pre className='text-sm text-white'>
                                                        {exampleText}
                                                    </pre>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>

                                {/* Right column */}
                                <div className='grid grid-cols-1 gap-4'>
                                    <section aria-labelledby='section-2-title'>
                                        <h2
                                            className='sr-only'
                                            id='section-2-title'
                                        >
                                            Section title
                                        </h2>
                                        <div className='overflow-hidden rounded-lg bg-gray-800 shadow'>
                                            <div className='p-6'>
                                                <label
                                                    htmlFor='comment'
                                                    className='block text-md font-bold leading-6 text-white'
                                                >
                                                    Result
                                                </label>
                                                <div className='py-2'>
                                                    <pre className='text-sm whitespace-normal text-white'>
                                                        {exampleResult.replace(
                                                            /\n/g,
                                                            '\\n'
                                                        )}
                                                    </pre>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className='mx-auto mt-40 max-w-7xl overflow-hidden px-6 pb-20 sm:mt-64 sm:pb-24 lg:px-8'>
                <nav
                    className='-mb-6 flex justify-center sm:space-x-12'
                    aria-label='Footer'
                >
                    {footerNavigation.main.map((item) => (
                        <div key={item.name} className='pb-6 px-2'>
                            <a
                                href={item.href}
                                className='text-sm leading-6 text-gray-600 hover:text-gray-900'
                            >
                                {item.name}
                            </a>
                        </div>
                    ))}
                </nav>
                <div className='mt-10 flex justify-center space-x-10'>
                    {footerNavigation.social.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className='text-gray-400 hover:text-gray-500'
                        >
                            <span className='sr-only'>{item.name}</span>
                            <item.icon className='h-6 w-6' aria-hidden='true' />
                        </a>
                    ))}
                </div>
                <p className='mt-10 text-center text-xs leading-5 text-gray-500'>
                    <span className='block sm:inline'>
                        &copy; 2023 Tien S. Nguyen.
                    </span>{' '}
                    <span className='block sm:inline'>
                        All rights reserved.
                    </span>
                </p>
            </footer>
        </div>
    );
};

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About me', href: 'https://nguyensongtien.com' },
];

const footerNavigation = {
    main: [
        { name: 'Home', href: '/' },
        { name: 'About me', href: 'https://nguyensongtien.com' },
    ],
    social: [
        {
            name: 'Facebook',
            href: '#',
            icon: (props: any) => (
                <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
                    <path
                        fillRule='evenodd'
                        d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                        clipRule='evenodd'
                    />
                </svg>
            ),
        },

        {
            name: 'Twitter',
            href: '#',
            icon: (props: any) => (
                <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
                    <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
                </svg>
            ),
        },
        {
            name: 'GitHub',
            href: '#',
            icon: (props: any) => (
                <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
                    <path
                        fillRule='evenodd'
                        d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                        clipRule='evenodd'
                    />
                </svg>
            ),
        },
        {
            name: 'YouTube',
            href: '#',
            icon: (props: any) => (
                <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
                    <path
                        fillRule='evenodd'
                        d='M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z'
                        clipRule='evenodd'
                    />
                </svg>
            ),
        },
    ],
};

export const exampleText = `
Quoting strings is tricky,
said the old guru,
and continued programming in assembly.`;
export const exampleResult =
    'Quoting strings is tricky,\nsaid the old guru,\nand continued programming in assembly.';

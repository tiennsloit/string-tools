import { Prism } from '@mantine/prism';
import React, { useEffect, useState } from 'react';
import { Layout } from './layout';
import duotoneDark from 'prism-react-renderer/themes/duotoneDark';
import duotoneLight from 'prism-react-renderer/themes/duotoneLight';
import { escapeText } from './tools';

export const Home = () => {
    const [text, setText] = useState('');
    const [result, setResult] = useState('');

    useEffect(() => {
        setResult(escapeText(text));
    }, [text]);

    return (
        <Layout>
            {/* Main 3 column grid */}
            <div className='grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8'>
                {/* Left column */}
                <div className='grid grid-cols-1 gap-4 lg:col-span-2'>
                    <section aria-labelledby='section-1-title'>
                        <h2 className='sr-only' id='section-1-title'>
                            Section title
                        </h2>
                        <div className='overflow-hidden rounded-lg bg-gray-50 shadow'>
                            <div className='p-6'>
                                <div>
                                    <label
                                        htmlFor='comment'
                                        className='block text-sm font-medium leading-6 text-gray-900'
                                    >
                                        Add multiline code
                                    </label>
                                    <div className='mt-2'>
                                        <textarea
                                            rows={10}
                                            name='comment'
                                            id='comment'
                                            className='block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6'
                                            defaultValue={''}
                                            value={text}
                                            onChange={(event) =>
                                                setText(event.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Right column */}
                <div className='grid grid-cols-1 gap-4'>
                    <section aria-labelledby='section-2-title'>
                        <h2 className='sr-only' id='section-2-title'>
                            Section title
                        </h2>
                        <div className='overflow-hidden rounded-lg bg-white shadow'>
                            <div className='p-6'>
                                <label
                                    htmlFor='comment'
                                    className='block text-sm font-medium leading-6 text-gray-900'
                                >
                                    Result
                                </label>
                                <div className='py-2'>
                                    {' '}
                                    <Prism language='bash'>{result}</Prism>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    );
};

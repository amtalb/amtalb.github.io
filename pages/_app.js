import '../styles/global.scss'

import Head from "next/head"

import { Arvo } from 'next/font/google'
import { Cabin } from 'next/font/google'

const arvo = Arvo({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-arvo',
})
const cabin = Cabin({
    subsets: ['latin'],
    variable: '--font-cabin',
})

function PersonalWebsite({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Alex Talbott</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <style jsx global>{`
                :root {
                --arvo-font: ${arvo.style.fontFamily};
                --cabin-font: ${cabin.style.fontFamily};
                }
            `}</style>
            <Component {...pageProps} />
        </>
    );
}

export default PersonalWebsite;
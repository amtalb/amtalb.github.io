import '../styles/global.scss'

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
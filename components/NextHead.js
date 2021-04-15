import Head from 'next/head';

export default function NextHead({ children }) {
    return (
        <Head>
            <title>
                Quizoo | A json based quiz client built with react &amp; next,
                🤫
            </title>
            <link rel="icon" href="icon.png" />
            <meta
                name="title"
                content="Quizoo | A json based quiz client built with react & next, 🤫"
            />
            <meta
                name="description"
                content="Simple & Sweet JSON based quiz client built with the most modern tech stack. "
            />
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://quizoo.vercel.app/" />
            <meta
                property="og:title"
                content="Quizoo | A json based quiz client built with react & next, 🤫"
            />
            <meta
                property="og:description"
                content="Simple & Sweet JSON based quiz client built with the most modern tech stack. "
            />
            <meta property="og:image" content="/icon.png" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://quizoo.vercel.app/" />
            <meta
                property="twitter:title"
                content="Quizoo | A json based quiz client built with react & next, 🤫"
            />
            <meta
                property="twitter:description"
                content="Simple & Sweet JSON based quiz client built with the most modern tech stack. "
            />
            <meta property="twitter:image" content="/icon.png" />
            {children}
        </Head>
    );
}

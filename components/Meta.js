import Head from 'next/head'

export const siteTitle = 'Sarah Ahmed';

const Meta = () => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
            <meta
                name="description"
                content="Sarah Ahmed's Personal Website"
            />
            <meta name="og:title" content={siteTitle} />
        </Head>
    )
}
export default Meta;
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function SantaClara() {
    return(
        <>
        <Layout>
            <Head>
                <title>Santa Clara University</title>
            </Head>
            <h1>SCU</h1>
            <h2>
                <Link href="/">
                <a>Back to home</a>
                </Link>
            </h2>
          </Layout>
        </>
    );
}

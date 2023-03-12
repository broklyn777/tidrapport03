import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <div>
            <Head>
                <title>Tidrapport App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main className="container mx-auto">{children}</main>

            <Footer />
        </div>
    )
}

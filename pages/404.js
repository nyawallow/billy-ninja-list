import Link from 'next/link'
import Head from 'next/head'
import { useEffect } from 'react';
// import { useRouter } from 'next/router'
import Router from 'next/router'

const NotFound = () => {
    // const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            // router.push("/")
            Router.push("/")
        }, 3000)
    }, [])

    return (
        <>
            <Head>
                <title>Ninja List | 404</title>
                <meta name="keywords" content="ninjas" />
            </Head>
            <div className="not-found">
                <h1>Oooops...</h1>
                <h2>The page cannot be found</h2>
                <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
            </div>
        </>
    );
}
 
export default NotFound;
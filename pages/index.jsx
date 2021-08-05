import BlogLayout from "../components/BlogLayout";
import Head from 'next/head';

const Index = () => {
    return(
        <>
            <Head>
                <title>Hwan Blog</title>
            </Head>
            <BlogLayout>
                <div>
                    {/*
                        public
                        -> localhost:3001/app/images1.jpg
                        -> localhost:3001/images1.jpg
                    */}
                    <img src="/images1.jpg" />
                </div>
            </BlogLayout>
        </>
    )
}

export default Index;
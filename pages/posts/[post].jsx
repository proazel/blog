import {useRouter} from 'next/router';
import BlogLayout from "../../components/BlogLayout";
import Head from 'next/head';

const data = [
    {
        id:"1",
        subject:"my blog",
        content:"content11",
        date:"2021-06-28",
        hit:"99",
    },{
        id:"2",
        subject:"my blog",
        content:"content22",
        date:"2021-08-28",
        hit:"99",
    },{
        id:"3",
        subject:"my blog",
        content:"content33",
        date:"2021-09-28",
        hit:"99",
    }
]

const Post = () => {
    const router = useRouter();
    const {post} = router.query;

    const list = data.map( v=>{
        return(
            <div>
                <ul key={v.id}>
                    <li>{v.subject}</li>
                    <li>{v.content}</li>
                    <li>{v.date}</li>
                    <li>{v.hit}</li>
                </ul>
            </div>

        )
    })
    
    return(
        <>
            <Head>
                <title>Hwan Blog | 글쓰기</title>
            </Head>
            <BlogLayout>
                {post} 리스트
                <div>
                    {list}
                </div>
            </BlogLayout>
        </>
    )
}

export default Post;
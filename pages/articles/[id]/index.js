import React from 'react';
// import {useRouter} from 'next/router'
import Meta from '../../../components/Meta';
import Link from 'next/link';
// import {server} from '../../../config/index';

const index = ({data}) => {

    // const router = useRouter();
    // const {id} = router.query; 

    const {id, title, body} = data; 

    return (
        <div>
            <Meta title={title} />
            <h1>article number: {id}</h1>
            <h3>{title}</h3>
            <p>{body}</p>
           <button><Link href='/'>back home</Link></button> 
        </div>
    )
}

export default index

// export const getServerSideProps = async (context) => {

//     console.log('context query', context.params)
 
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//     const data = await res.json();
//     return {
//         props: {data}
//     }
// }


export const getStaticProps = async (context) => {

 
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    const data = await res.json();
    return {
        props: {data}
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`); 
    const articles = await res.json();

    const ids = articles.map(value=> value.id);

    const paths = ids.map(value=> ({params: {id: value.toString()}}));

    return {
        paths,
        fallback: false
    }

}

// SSERVING LOCAL DATA


// export const getStaticProps = async (context) => {

 
//     const res = await fetch(`${server}/api/articles/${context.params.id}`);
//     const data = await res.json();
//     return {
//         props: {data}
//     }
// }

// export const getStaticPaths = async () => {
//     const res = await fetch(`${server}/api/articles`); 
//     const articles = await res.json();

//     const ids = articles.map(value=> value.id);

//     const paths = ids.map(value=> ({params: {id: value.toString()}}));

//     return {
//         paths,
//         fallback: false
//     }

// }


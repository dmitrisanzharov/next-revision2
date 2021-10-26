import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Meta from '../components/Meta';
import SinglePage from '../components/SinglePage';
// import {server} from '../config/index';

export default function Home({data}) {
  return (
    <div>
      <Meta title='home page' />
      <h1>Hello world, this is home page</h1>
      <hr />
      {data.map(value=> <SinglePage {...value} key={value.id} />)}
    </div>
  )
}


export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
  const data = await res.json();
  
  return {
    props: {
      data
    }
  }
}

// serving local data

// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/articles`);
//   const data = await res.json();
  
//   return {
//     props: {
//       data
//     }
//   }
// }
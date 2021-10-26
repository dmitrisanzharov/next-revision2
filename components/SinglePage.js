import React from 'react';
import Link from 'next/link'; 
import Meta from './Meta';

const SinglePage = (props) => {

    const {id, title, body} = props;

    return (
        <Link href={`/articles/${id}`}>
            <a>
            <Meta title={title} />
            <h1>Article number {id}</h1>
            <h3>{title}</h3>
            <p>{body}</p>
            <hr />
            </a>
        </Link>
    )
}

export default SinglePage

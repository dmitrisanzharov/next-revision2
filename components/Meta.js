import Head from 'next/head';

const Meta = ({title, keywords, description}) => {
    return (
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='utf-8' />
            <link rel='icon' href='/favicon.ico' />
            <title>{title}</title>
        </Head>
    )
}


Meta.defaultProps = {
    title: 'Dmitri Pages',
    keywords: 'web development, programming, front end programming, next.js',
    description: 'Get the latest way to create the next APP and take it to the next level',
  }

export default Meta

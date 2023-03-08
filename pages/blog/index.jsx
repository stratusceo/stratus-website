import Head from "next/head"
import Image from "next/image"

import Navbar from "../components/Navbar"
import CTA from "../components/CTA"
import Link from "next/link"

export default function Blog({ allPostsData }) {
    console.log(allPostsData, 'allPostsData');

    const headline = allPostsData[0];
    const posts = allPostsData.slice(1, allPostsData.length);

    return (
        <>
            <Head>
                <title>STRATUS - Blog</title>
                <link rel="shortcut icon" href="/static/favicon.ico" />

                <meta name="title" content="STRATUS - Blog" />
                <meta name="description" content="Read our latest articles on our commitments, Web 3.0 news and many other articles written just for you." />

                <meta property="og:url" content="https://stratusagency.io/blog" />
                <meta property="og:title" content="STRATUS - Blog" />
                <meta property="og:description" content="Read our latest articles on our commitments, Web 3.0 news and many other articles written just for you." />
                <meta property="og:image" content="https://cdn.discordapp.com/attachments/793382333339271178/1055180454900285540/icon_black.jpg" />

                <meta property="twitter:url" content="https://stratusagency.io/blog" />
                <meta property="twitter:title" content="STRATUS - Blog" />
                <meta property="twitter:description" content="Read our latest articles on our commitments, Web 3.0 news and many other articles written just for you." />
                <meta property="twitter:image" content="https://cdn.discordapp.com/attachments/793382333339271178/1055180454900285540/icon_black.jpg" />
            </Head>

            <Navbar />

            <section className="post-headline">
                <div className="left">
                    <Image
                        src={headline.bannerImage}
                        alt="headline article thumbnail"
                        width={1190}
                        height={700}
                    />
                </div>

                <Link href={`/blog/${headline.id}`}>
                    <div className="post-headline-content">
                        <h1>{headline.title}</h1>
                        <div className="bottom">
                            <p>Read more</p>
                            <p>{headline.date}</p>
                        </div>
                    </div>
                </Link>
            </section>

            <section className="posts">
                <div className="row">
                    {posts.map(({ id, bannerImage, date, title }, i) => (
                        <Link href={`/blog/${id}`} key={i}>
                            <div className="post">
                                <Image
                                    src={bannerImage}
                                    alt="thumbnail"
                                    width={708}
                                    height={422}
                                />

                                <h2 className="date">{date}</h2>
                                <h2 className="title">{title}</h2>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <CTA />
        </>
    )
}

export async function getServerSideProps() {
    const response = await fetch("https://api.stratusagency.io/posts");
    const allPostsData = await response.json();

    return { props: { allPostsData } };
}
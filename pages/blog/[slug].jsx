import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import MarkdownIt from 'markdown-it';
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import CTA from "../components/CTA";

// The page for each post
export default function Post({ allPostsData }) {
    const router = useRouter();

    // Get the query parameter from the URL
    const [slug, setSlug] = useState(router.query.slug);
    const allPostsDataCopy = allPostsData;

    const [load, setLoad] = useState(false);

    const [widthBanner, setWidthBanner] = useState();
    const [otherPostsData, setOtherPostsData] = useState();
    const [content, setContent] = useState(allPostsData.find(element => element.id === router.query.slug));

    const [html, setHTML] = useState();
    const [description, setDescription] = useState(content.post.replace(/\*\*|#|\n/g, ""));

    useEffect(() => {
        setWidthBanner(window.innerWidth);

        if (!load) {
            if (content) {
                const md = new MarkdownIt({
                    html: true,
                    linkify: true,
                    typographer: true,
                });

                setHTML(md.render(content.post));

                let str = content.post.replace(/\*\*|#|\n/g, "");
                setDescription(str.slice(0, 100));

                const indexPost = allPostsDataCopy.indexOf(content);

                allPostsDataCopy.splice(indexPost, 1);

                allPostsDataCopy.sort((a, b) => {
                    if (new Date(a.date).getTime() < new Date(b.date).getTime()) return 1;
                    else return -1;
                });

                setOtherPostsData(allPostsDataCopy);
                setLoad(true);
            }
        }
    }, [load, content, allPostsData, slug, otherPostsData, allPostsDataCopy]);

    return <>
        <Head>
            <title>{content.title}</title>
            <link rel="shortcut icon" href="/static/favicon.ico" />

            <meta name="title" content={content.title} />
            <meta name="description" content={description} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={`https://stratusagency.io/blog/${slug}`} />
            <meta property="og:title" content={content.title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={content.bannerImage} />

            <meta property="twitter:url" content={`https://stratusagency.io/blog/${slug}`} />
            <meta property="twitter:title" content={content.title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={content.bannerImage} />
        </Head>

        {load ? <>
            <section className="post headline">
                <div className="text">
                    <h1>{content.title}</h1>
                    <h2>{content.date}</h2>
                </div>

                <Image
                    src={content.bannerImage}
                    alt="thumbnail"
                    width={widthBanner ? widthBanner : 0}
                    height={700}
                />
            </section>

            <section className="post content">
                <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} ></div>
            </section>

            <section className="other-posts">
                <h2>OTHER POSTS</h2>

                <div className="row">
                    {otherPostsData.slice(0, 2).map(({ id, bannerImage, date, title }, i) => (
                        <Link href={`/blog/${id}`} onClick={() => {
                            setSlug(id)
                            setLoad(false)
                            setContent(allPostsData.find(element => element.id === id))
                        }} key={i}>
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
        </> : <>
            <h1>{content.title}</h1>
            <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} ></div>
        </>}
    </>
}

export async function getServerSideProps() {
    const res = await fetch("https://api.stratusagency.io/posts-details");
    const allPostsData = await res.json();

    return { props: { allPostsData } };
}
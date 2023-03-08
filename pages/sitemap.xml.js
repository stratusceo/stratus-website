const EXTERNAL_DATA_URL = "https://stratusagency.io/blog";

function generateSiteMap({ allPostsData }) {
    return `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
                <!--We manually set the two URLs we know already-->
                <url>
                    <loc>
                        https://stratusagency.io/about
                    </loc>
                </url>
                <url>
                    <loc>
                        https://stratusagency.io/work
                    </loc>
                </url>
                <url>
                    <loc>
                        https://stratusagency.io/contact
                    </loc>
                </url>
                <url>
                    <loc>
                        https://stratusagency.io/blog
                    </loc>
                </url>
            ${allPostsData.map(({ id }) => {
        return `
                    <url>
                        <loc>${`${EXTERNAL_DATA_URL}/${id}`}</loc>
                    </url>
                `;
    }).join("")}
        </urlset>
    `;
}

export default function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
    // We make an API call to gather the URLs for our site
    const request = await fetch("https://api.stratusagency.io/posts");
    const posts = await request.json();

    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap(posts);

    res.setHeader("Content-Type", "text/xml");
    // we send the XML to the browser
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}
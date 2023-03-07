module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['assets.stratusagency.io', 'stratusagency.io'],
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  exportPathMap: async function () {
    // query all blog paths
    const allPostsData = await fetch("https://api.stratusagency.io/posts")
      .then(async (response) => {
        const json = await response.json();
        return json;
      });

    let paths = {};

    // sort all blog paths
    Object.values(allPostsData).forEach(element => {
      paths = {
        ...paths,
        [`/blog/${element.id}`]: {
          page: `/blog/${element.id}`,
          query: { slug: element.id, __nextDefaultLocale: 'en', __nextDataReq: true }
        }
      };
    });

    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/work': { page: '/work' },
      '/contact': { page: '/contact' },
      '/legal': { page: '/legal' },
      '/blog': { page: '/blog', __nextDefaultLocale: 'en', __nextDataReq: true },
      ...paths,
    }
  },
}
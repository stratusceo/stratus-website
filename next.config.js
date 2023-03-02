module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['assets.stratusagency.io', 'stratusagency.io'],
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    const allPostsData = await fetch("https://api.stratusagency.io/posts")
      .then(async (response) => {
        const json = await response.json();
        return json;
      });

    let paths = {};

    // query all blog paths
    Object.values(allPostsData).forEach(element => {
      paths = {
        ...paths,
        [`/blog/${element.id}`]: {
          page: `/blog`,
          query: { slug: element.id }
        }
      };
    });

    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/work': { page: '/work' },
      '/contact': { page: '/contact' },
      '/legal': { page: '/legal' },
      '/blog': { page: '/blog' },
      ...paths,
    }
  },
}
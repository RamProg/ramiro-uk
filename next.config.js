/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/cv',
        destination:
          'https://drive.google.com/file/d/1huO-gbsx88v5zIhoA1DmPvQ5OOiAPTUl/view',
        permanent: true,
      },
      {
        source: '/meet',
        destination: 'https://calendly.com/ramirodlp/15min',
        permanent: true,
      },
      {
        source: '/message',
        destination: 'https://forms.gle/MwpUZgpCzjuMxAGo6',
        permanent: true,
      },
      {
        source: '/projects',
        destination: 'https://www.linkedin.com/in/ramirodlp/details/projects/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

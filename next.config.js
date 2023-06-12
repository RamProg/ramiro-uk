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
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/ramirodlp/',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/RamProg',
        permanent: true,
      },
      {
        source: '/stackoverflow',
        destination: 'https://stackoverflow.com/users/13844309/ramaprog',
        permanent: true,
      },
      {
        source: '/medium',
        destination: 'https://medium.com/@ramirodlp',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

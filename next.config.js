/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/cv',
        destination:
          'https://drive.google.com/file/d/1WjtYzzvYgkpONwzbBAgAp4JSjoQUM6HO/view',
        permanent: false,
        basePath: false,
      },
      {
        source: '/meet',
        destination: 'https://calendar.app.google/JysCUGiEXqZrEGeH7',
        permanent: false,
        basePath: false,
      },
      {
        source: '/message',
        destination: 'https://forms.gle/MwpUZgpCzjuMxAGo6',
        permanent: false,
        basePath: false,
      },
      {
        source: '/projects',
        destination: 'https://www.linkedin.com/in/ramirodlp/details/projects/',
        permanent: false,
        basePath: false,
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/ramirodlp/',
        permanent: false,
        basePath: false,
      },
      {
        source: '/github',
        destination: 'https://github.com/RamProg',
        permanent: false,
        basePath: false,
      },
      {
        source: '/stackoverflow',
        destination: 'https://stackoverflow.com/users/13844309/ramaprog',
        permanent: false,
        basePath: false,
      },
      {
        source: '/medium',
        destination: 'https://medium.com/@ramirodlp',
        permanent: false,
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;

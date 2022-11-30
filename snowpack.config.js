/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  buildOptions: {
    baseUrl: '',
  },
  theme: {
    minWidth: {
      '5': '250px'
    }
  }
}

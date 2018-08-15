export const DevelopmentConfigConst = {
    server: {
      host: 'http://5b7403bca583740014190859.mockapi.io',
      port: '80',
      baseApi: '/api',
      get serverBaseURL() {
        return `${this.host}:${this.port}${this.baseApi}`
      },
    },
  }
;

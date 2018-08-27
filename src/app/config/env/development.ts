export const DevelopmentConfigConst = {
    server: {
      host: 'http://5b8133c497d8e500144f2de6.mockapi.io',
      port: '80',
      baseApi: '/api',
      get serverBaseURL() {
        return `${this.host}:${this.port}${this.baseApi}`
      },
    },
  }
;

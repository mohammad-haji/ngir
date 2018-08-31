export const DevelopmentConfigConst = {
    server: {
      host: 'https://5b8133c497d8e500144f2de6.mockapi.io',
      port: '',
      baseApi: '/api',
      get serverBaseURL() {
        return `${this.host}:${this.port}${this.baseApi}`
      },
    },
  }
;

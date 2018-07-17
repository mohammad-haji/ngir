export const DevelopmentConfigConst = {
    server: {
      host: 'http://localhost',
      port: '3000',
      baseApi: '/api',
      get serverBaseURL() {
        return `${this.host}:${this.port}${this.baseApi}`
      },
    },
  }
;

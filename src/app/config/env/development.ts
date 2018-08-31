export const DevelopmentConfigConst = {
    server: {
      host: 'https://5b8133c497d8e500144f2de6.mockapi.io',
      port: '80',
      baseApi: '/api',
      get serverBaseURL() {
        return `${this.host}:${this.port}${this.baseApi}`
      },
    },
  }
;

// export const DevelopmentConfigConst = {
//   server: {
//     host: 'http://mysterious-headland-82408.herokuapp.com',
//     port: '80',
//     baseApi: '/demo/api',
//     get serverBaseURL() {
//       return `${this.host}:${this.port}${this.baseApi}`
//     },
//   },
// }
// ;

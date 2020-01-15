module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding',
      "can't-be-evil": 'true',
    },
  },
  pwa: {
    themeColor: '#263238',
  },
};
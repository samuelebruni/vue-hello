const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Grazie a dio esiste vueJS (?)',
        image: 'https://fastly.picsum.photos/id/565/300/300.jpg?hmac=0aeSSgdxvnJYQ22Mm2VbUdUVvz8FDG-CH3Xgxd9eoDs'
      }
    }
  }).mount('#app')
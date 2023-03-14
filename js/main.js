  const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Ciao mondo, sto usando Vue!',
        picture :'https://picsum.photos/200'
      }
    }
  }).mount('#app')
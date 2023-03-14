  const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Ciao mondo, sto usando Vue!',
        picture :'https://picsum.photos/200',
        picture_2: 'img/cover-1.webp',
        display: 'display-block'
      }
    },
    methods: {
        cambiaDisplay() {
          if (this.display == 'display-block') {
            this.display = 'display-none';
          } else {
            this.display = 'display-block';
          }
        }
      }
  }).mount('#app')
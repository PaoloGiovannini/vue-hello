  const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Ciao mondo, sto usando Vue!'
      }
    }
  }).mount('#app')
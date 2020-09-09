<template>
  <div class="login">
    <router-link to="/">Leave room</router-link>
    <div class="form">
      <h1>Room title</h1>
      <input
        type="text"
        placeholder="Type here..."
      />
      <button
        type="button"
        @click="send"
      >
        Send
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Room',

  inject: ['socket'],

  mounted() {
    this.socket.on('position', () => {
      console.log('back from server?');
    })
  },

  methods: {
    send() {
      this.socket.emit('move');
    },
  },
}
</script>

<style scoped>
.login {
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.form {
  max-width: 640px;
}

</style>



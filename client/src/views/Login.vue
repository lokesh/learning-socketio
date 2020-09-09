<template>
  <div class="login">
    <div class="form">
      <input
        type="text"
        aria-label="Your name"
        placeholder="Your name"
      />
      <input
        type="text"
        aria-label="Room name"
        placeholder="Room"
      />
      <button
        type="button"
      >
        Join
      </button>
      <router-link to="/room/*">Go to room</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',

  inject: ['socket'],

  mounted() {
    this.socket.on('message', () => {
      console.log('got a message');
    })
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
  max-width: 320px;
}

input {
  margin-bottom: 12px;
}
</style>



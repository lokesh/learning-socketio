<template>
  <div @click="toggle" class="game">
   
   Block game<br>
   {{ position }}
  </div>
</template>

<script>
import io from 'socket.io-client';

export default {
  name: 'BlockGame',

  data() {
    return {
      socket: null,
      context: null,
      position: {
        x: 0,
        y: 0,
      },
    };
  },

  created() {
    this.socket = io('http://localhost:3000');
  },

  mounted() {
    this.socket.on('position', data => {
      this.position = data;
    });
  },

  methods: {
    toggle() {
      this.socket.emit('move');
    }
  }
}
</script>

<style scoped>
.game {
  height: 100vh;
  background: #eee;
}

</style>
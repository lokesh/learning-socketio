<template>
  <div id="app">
<!--     <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/room">Room</router-link>
    </div>
 -->    <router-view/>
  </div>
</template>

<script>
import io from 'socket.io-client';

export default {
  name: 'App',

  provide() {
    return {
      socket: io('http://localhost:3000'),
    };
  },
}
</script>style

<style>
@import "./styles/base.css";
</style>


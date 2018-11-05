<template>
  <div>
    <h1>{{ greeting }}!</h1>

    <button @click="count()">Click me</button>

    <p>
      You've clicked: {{ counter }} times.
    </p>
  </div>
</template>


<script>
export default {
  data() {
    return {
      greeting: 'Hello World - Meteor-Vue-App',
      counter: 0
    }
  },
  methods: {
    count() {
      this.counter++
    }
  }
}
</script>


<template>
  <div class="home">
    <div class="card">
      <div class="image">
      </div>
      <h1 class="name"><span>I'm</span>{{name}}</h1>
      <h2 class="job">Web developer {{getAge}}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      name: 'Richard Dorius'
    }
  },
  computed: {
    getAge() {
      const birthday = new Date(1993, 8, 1);
      const today = new Date();

      return today.getFullYear() - birthday.getFullYear()
    }
    
  }
}
</script>
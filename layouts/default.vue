<template>
  <div>
    <Header/>
    <nuxt/>
  </div>
</template>

<script>
import Header from "~/components/Header"
export default {
  name: 'DefaultLayout',
  components:{
    Header
  }
  
}
</script>

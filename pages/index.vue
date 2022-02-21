<template>
<section class="container">
  <!-- <Header/> -->

</section>

</template>

<script>
import Header from '~/components/Header'
export default {
  name: 'IndexPage',
  components:{
Header
  },
  data(){
  return{
    userID:''
  }
},
methods:{
  onLoadUser(){
this.$router.push({name:'/users/index',params:{id:this.userID}})
  }
}
}
</script>

<template>
    <div>
    <input type="text" v-model="userID">
    <button @click="onLoadUser()">load user</button>
    <nuxt-child/>
  </div>
</template>

<script>
export default {
    data(){
  return{
    userID:''
  }
},
    methods:{

    
  onLoadUser(){
this.$router.push({name:'/users/',params:{id:this.userID}})
  }
    },
    layout:'users'
}
</script>

<style>

</style>
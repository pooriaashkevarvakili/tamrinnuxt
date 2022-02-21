<template>
  <header class="header">
      <ul class="nav-items">
          <li>
            <nuxt-link to="/">home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/users">users</nuxt-link>
          </li>
      </ul>
  </header>
</template>

<script>
export default {

}
</script>

<style>
.header{
width: 100%;
height:60px;
display: flex;
align-items: center;
justify-content:center;
background-color: #ccc;
}
.nav-items{
    list-style: none;
    padding: 0;
    margin: 0;
    display:flex;
    justify-content: space-around;
    align-items: center;
    width:80%;
}
.nav-items a{
    text-decoration: none;
    color: #000;
}
.nav-items a:hover,nav-items a:active{
    color: #fff;
}
</style>
<template>
 <div class="home-page">
<section class="intro">
    <h1>get the latest tech news</h1>
</section>
<section class="featured-posts">
  <PostPreview/>
</section>
 </div>
</template>

<script>
import PostPreview from "@/components/posts/postPreview"
export default {
components:{
    PostPreview
}
}
</script>

<style scoped>
.posts-page{
    display: flex;
    justify-content:center;
    align-items: center;
}
</style>
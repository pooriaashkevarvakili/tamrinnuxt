<template>
  <main class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <PostList :posts="posts" />
  </main>
</template>

<script>
import PostList from '@/components/Posts/PostList';

export default {
  components: {
    PostList,
  },
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        posts: [
          {
            author: 'Metal Gogo',
            id: '1',
            title: 'My awesome post',
            previewText: 'Super amazing content',
            thumbnail: 'http://placekitten.com/600/800',
          },
          {
            author: 'Metal Gogo',
            id: '2',
            title: 'My awesome post 2',
            previewText: 'Super amazing content',
            thumbnail: 'http://placekitten.com/800/600',
          },
        ],
      });
    }, 1000);
  },
};
</script>


<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~assets/images/main-page-background.jpg');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}
</style>

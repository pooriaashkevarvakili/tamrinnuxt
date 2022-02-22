<template>
  <div class="posts-page">
    <PostList :posts="posts"/>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList';

export default {
  components: {
    PostList,
  },
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
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
    })
      .then(data => {
        return data;
      })
      .catch(e => {
        context.error(new Error());
      });
  },
  created() {
    this.$store.dispatch('setPosts', this.posts);
  },
};
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

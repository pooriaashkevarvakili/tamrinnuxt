<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButton @click="$router.push('/admin/new-post')">Create post</AppButton>
    </section>
    <section class="existing-posts">
      <h2>Existing posts</h2>
      <PostList
        :posts="posts"
        is-admin
      />
    </section>
  </div>
</template>

<script>
import AppButton from '@/components/UI/AppButton';
import PostList from '@/components/Posts/PostList';

export default {
  layout: 'admin',
  components: {
    AppButton,
    PostList,
  },
  data() {
    return {
      posts: [
        {
          author: 'Metal Gogo',
          id: '1',
          title: 'My awesome post',
          content: 'Super amazing content',
          thumbnail: 'http://placekitten.com/600/800',
        },
        {
          author: 'Metal Gogo',
          id: '2',
          title: 'My awesome post 2',
          content: 'Super amazing content',
          thumbnail: 'http://placekitten.com/800/600',
        },
      ],
    };
  },
};
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h2 {
  text-align: center;
}
</style>

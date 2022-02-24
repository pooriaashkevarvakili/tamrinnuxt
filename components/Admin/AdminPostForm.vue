<template>

  <form @submit.prevent="onSave">
    <AppControlInput v-model="postInformation.author">
      Author Name
    </AppControlInput>
    <AppControlInput v-model="postInformation.title">
      Title
    </AppControlInput>
    <AppControlInput v-model="postInformation.thumbnailLink">
      Thumbnail Link
    </AppControlInput>
    <AppControlInput
      v-model="postInformation.content"
      control-type="textarea"
    >
      Content
    </AppControlInput>
    <AppButton type="submit">
      Save
    </AppButton>
    <AppButton
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel"
    >
      Cancel
    </AppButton>
  </form>
</template>

<script>
import AppButton from '@/components/UI/AppButton';
import AppControlInput from '@/components/UI/AppControlInput';

export default {
  components: {
    AppButton,
    AppControlInput,
  },
  props: {
    post: {
      type: Object,
      default: () => {
        return {
          author: '',
          title: '',
          thumbnailLink: '',
          content: '',
        };
      },
    },
  },
  data() {
    return {
      postInformation: { ...this.post },
    };
  },
  methods: {
    onCancel() {
      // Navigate back
      this.$router.push('/admin');
    },
    onSave() {
      // Save the post
      console.log(this.postInformation);
    },
  },
};
</script>

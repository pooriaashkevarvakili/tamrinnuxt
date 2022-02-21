<template>
     <nuxt-link :to="'/posts/'+1" class="post-preview">
    <article class="post-preview">
        <div class="post-thumbnail"
        :style="{backgroundImage:url('https://pixabay.com/images/id-3481377/')}"
        ></div>
        <div class="post-centent">
            <h1>{{title}}</h1>
            <p>{{previewText}}</p>
        </div>
    </article>
    </nuxt-link>
</template>

<script>
export default {
name:'PostPreview',
props:{
    id:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    previewText:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    }
}
}
</script>

<style>

</style>
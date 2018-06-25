<template>
<div>
  <div class="catdesc">
    <div class="col-sm-12 col-md-4">
      <h2 class="catdesc_title">{{ prCategoryTitle }}</h2>
      <p class="catdesc_description">{{ prCategoryDescription }}</p>
    </div>
    <div class="col-sm-12 col-md-8 catdesc_preview">
      <img v-bind:src="'img/' + prCategoryPreview" 
      :alt="prCategoryTitle + ' category'" 
      :title="prCategoryTitle + ' category'">
    </div>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {   

    }
  },
  watch: {
  // : function () {
  // }
  },
  props: [
    "prCategoryTitle",
    "prCategoryDescription",
    "prCategoryPreview"
  ],
  components: {
  },
  mounted: function () {
  },
  methods: {        
  }
}
</script>
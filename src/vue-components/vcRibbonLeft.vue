<template>
  <div>
    <!--ribbon back-->
      <img src="img/ui/li_ribbon_back.png" class="ribbon--back">
      <!--/ribbon back-->
      <!--ribbon front-->
      <img src="img/ui/li_ribbon_front.png" class="ribbon--front">
      <!-- label_featured -->
      <img :src="'img/ui/' + prLabel + '.svg'" 
      class="label_categories">
      <!--/ribbon front-->
      <div class="row li_subheader--top">
        <div class="col-sm-12"></div>
      </div>
      <div class="row li_subheader--bottom">
        <div class="col-sm-12"></div>
        zzzz
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
    "prLabel"
  ],
  components: {
  },
  mounted: function () {
    
  },
  methods: {        
  }
}
</script>
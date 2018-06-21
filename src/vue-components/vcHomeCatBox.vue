<template>
<div>
  <section v-for="(i, index) in radioCategories" class="col-xs-12 col-sm-6 col-lg-3">
    <!--item box-->
    <div class="item_box">
      <div class="item_bg--white">
        <div class="item_bg--skew">
        </div>
        <a :href="'index.html#/radios/' + i"><img :src="'img/ui/cat_' + i + '.png'" class="item_img"></a>
      </div>
      <div class="item_label--front">
      </div>
      <div class="item_label--back-right">
      </div>
      <div class="item_label--back-left">
      </div>
      <a :href="'index.html#/radios/' + i"><img :src="'img/ui/label_' + i + '.svg'" class="category_name"></a>
    </div>
    <!--/item box-->
  </section>
</div>
</template>
<script>
export default {
  data() {
      return {
        radioCategories: [
          "horntype",
          "crystal",
          "transistor",
          "minitube",
          "woodcase",
          "bakelite",
          "portable",
          "unusual"
        ]
      }
    },
    watch: {
      // : function () {
      // }
    },
    props: [

    ],
    components: {},
    mounted: function () {
      console.log("vcHomeCatBox.vue mounted");
    },
    methods: {}
}
</script>
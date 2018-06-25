<template>
<div>
  <div v-for="(i, index) in radioCategories" class="col-xs-12 col-sm-6 col-lg-3" role="navigation">
    <!--item box-->
    <div class="item_box">
      <div class="item_bg--white">
        <div class="item_bg--skew">
        </div>
        <a :href="'index.html#/radios/' + i">
        <img :src="'img/ui/cat_' + i + '.png'" class="item_img" 
        :alt="'category: ' + i" :title="'category: ' + i" :aria-posinset="index + 1" :aria-setsize="radioCategories.length"></a>
      </div>
      <div class="item_label--front" alt="">
      </div>
      <div class="item_label--back-right" alt="">
      </div>
      <div class="item_label--back-left" alt="">
      </div>
      <a :href="'index.html#/radios/' + i">
        <img :src="'img/ui/label_' + i + '.svg'" class="category_name" 
        :alt="'category: ' + i" :title="'category: ' + i">
      </a>
    </div>
    <!--/item box-->
  </div>
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
      
    },
    methods: {}
}
</script>
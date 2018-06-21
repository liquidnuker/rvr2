<template>
<div>
  <!-- begin categories -->
  <header class="row li_subheader categories">
    <div class="col-sm-12">
      <!--begin li subheader items-->
      <vcRibbonLeft :pr-label="label" />
      <!-- end li subheader items -->
    </div>
  </header>
  <nav class="list_group--custom">
    <h2 class="list_group--item">Vintage Radios</h2>
    <template v-for="i in categoryList">
      <a v-bind:href="'index.html#/radios/:' + i.category" class="list_group--item">
        {{ i.name }}
      </a>
    </template>    
  </nav>
  <!-- end categories -->
</div>
</template>
<script>
const vcRibbonLeft = () => import ('./vcRibbonLeft.vue');
export default {
  name: 'categories',
  data () {
    return {
      categoryList: [
        {
          name: "Horn Type",
          category: "horntype"
        },
        {
          name: "Crystal",
          category: "crystal"
        },
        {
          name: "Transistor",
          category: "transistor"
        },
        {
          name: "Mini Tube",
          category: "minitube"
        },
        {
          name: "Wood Case",
          category: "woodcase"
        },
        {
          name: "Bakelite",
          category: "bakelite"
        },
        {
          name: "Portable",
          category: "portable"
        },
        {
          name: "Unusual",
          category: "unusual"
        }
      ],

      // for top ribbon
      label: "label_categories"
    }
  },
  components: {
    vcRibbonLeft: vcRibbonLeft
  },
  mounted: function () {
  }
}
</script>
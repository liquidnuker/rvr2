<template>
<div>
<!-- siema -->
<div class="col-sm-12 main_carousel">
  <template v-for="i in categories">
  <!-- siema row -->
  <div class="row">    
    <div class="col-sm-4">
      <p class="main_carousel_title">
        {{ i.title }}
      </p>
      <p>{{ i.description }}</p>
    </div>
    <div class="col-sm-8 main_carousel--right">
      <img v-bind:src="'img/' + i.preview">
    </div>    
  </div>
  <!-- siema row -->
  </template>
</div>
<!-- /siema -->  
</div>
</template>
<script>
import axios from "axios";
import Siema from '../js/vendor/siema.min.js';
import {shuffleCategories} from "../js/shuffle.js";

import {jsonDir} from "../js/jsondir.js";
export default {
  data () {
    return {
      categories: ""
    }
  },
  methods: {
    loadCategories: function() {
      let jsonUrl =  jsonDir + "catdesc.json";
      
      axios.get(jsonUrl)
        .then((response) => {
          // shuffle then inject to categories
          this.categories = shuffleCategories(response.data.catdesc);
        })
        .then(() => {
          this.activateCarousel();

        })
        .catch((error) => {
          console.log(error);
        });
      
    },
    activateCarousel: function() {
      const topCarousel = new Siema({
      selector: '.main_carousel',
      duration: 600,
      easing: 'ease-out',
      perPage: 1,
      startIndex: 0,
      draggable: true,
      threshold: 20,
      loop: false,
      onInit: () => {    
      },
      onChange: () => {},
      });
      setInterval(() => topCarousel.next(), 2600)
    }
  },
  mounted: function () {
    this.loadCategories();
  }
}
</script>
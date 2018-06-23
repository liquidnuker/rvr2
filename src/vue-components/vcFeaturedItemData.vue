<template>
<div>
  <div class="row featured_item_data" id="featured_item_data">
    <a v-bind:href="'index.html#/radios/' + featuredItemType + '/' + featuredItemId" class="item_id">
      <h2>{{ featuredItemId }}</h2>
    </a><br>
    <a v-bind:href="'index.html#/radios/' + featuredItemType + '/' + featuredItemId" class="item_id">
      <img v-if="featuredItemType" :src="'img/' + featuredItemType + '/' + 
      featuredItemImg + '_thumb.jpg'">
    </a>
    <p>Make: {{ featuredItemMake }}</p>
    <p>Model: {{ featuredItemModel }}</p>
    <p>Category:
      <a v-bind:href="'index.html#/radios/' + featuredItemType" class="item_id">
        {{ featuredItemType }}
      </a>
    </p>
  </div>
</div>
</template>
<script>
import axios from "axios";
import {router} from "../js/router.js";
import {getRandomInt} from "../js/randomint.js";
import {radioCategories} from "../js/radiocategories.js";
import {shuffleCategories} from "../js/shuffle.js";

import {jsonDir} from "../js/jsondir.js";

export default {
  data() {
      return {
        API_DIR: jsonDir,

        featuredItemType: null,
        featuredItemId: "",
        featuredItemImg: "",
        featuredItemMake: "",
        featuredItemModel: "",

        // for top ribbon
        label: "label_featured"

      }
    },
    watch: {
      $route: function () {
        this.getRandomItem();
      }
    },
    components: {
    },
    methods: {
    getRandomItem: function () {
      let selectedItems = shuffleCategories(radioCategories);
      let dataz = selectedItems[0];
      let featuredItem;
      const jsonUrl = this.API_DIR + dataz + ".json";

      axios.get(jsonUrl)
        .then((response) => {
          // console.log(data[dataz][0].id); ok
          featuredItem = response.data[dataz];
        })
        .then(() => {
          // randomize array length
          const x = getRandomInt(0, featuredItem.length);

          this.featuredItemType = dataz;
          this.featuredItemId = featuredItem[x].id;
          this.featuredItemImg = featuredItem[x].img;
          this.featuredItemMake = featuredItem[x].make;
          this.featuredItemModel = featuredItem[x].model;

        })
        .catch(function (error) {
          console.log(error);
        });
    }
    },
    mounted: function () {
      this.getRandomItem();
    }
}
</script>
<template>
<div>
  <div class="row featured_item_data" aria-live="assertive"
    aria-atomic="true" aria-relevant="all">
    <a v-bind:href="'index.html#/radios/' + featuredItemType + '/' + featuredItemId" class="item_id">
      <h2>{{ featuredItemId }}</h2>
    </a><br>
    <a v-bind:href="'index.html#/radios/' + featuredItemType + '/' + featuredItemId" class="item_id">
      <img v-if="featuredItemType" :src="'img/categories/' + featuredItemType + '/' +
      featuredItemImg + '_thumb.jpg'" :alt="featuredItemType + ' ' + featuredItemId + ' image'" :title="featuredItemType + ' ' + featuredItemId + ' image'">
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
      let item = shuffleCategories(radioCategories)[0];
      let featuredItem;
      let jsonUrl = this.API_DIR + item + ".json";

      axios.get(jsonUrl)
        .then((response) => {
          featuredItem = response.data[item];
        })
        .then(() => {
          // randomize array length
          let index = getRandomInt(0, featuredItem.length);

          this.featuredItemType = item;
          this.featuredItemId = featuredItem[index].id;
          this.featuredItemImg = featuredItem[index].img;
          this.featuredItemMake = featuredItem[index].make;
          this.featuredItemModel = featuredItem[index].model;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    },
    mounted: function () {
      // this.getRandomItem();
    }
}
</script>
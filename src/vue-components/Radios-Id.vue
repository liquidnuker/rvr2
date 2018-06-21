<template>
<div>
  <!-- begin content -->
  <header>
    <div class="row">
      <div class="col-sm-12">
        <!-- header -->
      </div>
    </div>
  </header>
  <div class="row">
    <div class="col-sm-12">
      <!--left side-->
      <section class="col-sm-3">
        <!--begin categories -->
        <vcCategories />
        <!--end categories -->
        <!--begin featured items mount point-->
        <vcFeaturedItems />
        <!--/end featured items mount point-->
      </section>
      <!--end left side-->
      <!--right side-->
      <section class="col-sm-9">
        <!-- begin category description -->
        <div class="row category_description" id="category_description">
          <vcCatDesc
          :pr-category-title="categoryTitle"
          :pr-category-description="categoryDescription"
          :pr-category-preview="categoryPreview" />
        </div>
        <!-- end category description -->
        <!--main item box-->
        <!--begin subheader-->
        <div class="row row_subheader">
          <div class="col-sm-12">
            <p id="details">details</p>
          </div>
        </div>
        <!--/subheader-->
        <!--begin content box-->
        <main class="row content_box">
        <div class="row col-sm-12">
          <!-- begin breadcrumb -->
          <div v-if="bcVisible" class="breadcrumb">
            <a v-bind:href="'index.html#/'">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
            </a>&nbsp;
            <a v-bind:href="'index.html#/'">Home</a>&nbsp;&gt;
            <a v-bind:href="'index.html#/radios'">Radios</a>&nbsp;&gt;
            <a v-bind:href="'index.html#/radios/:' + bcCategory">{{ bcCategory }}</a>&nbsp;&gt;
            <p>{{ bcId }}</p>
          </div>
          <!-- end breadcrumb -->
        </div>
        <section id="gallery-placeholder" class="col-sm-12 radios_id">
          <div v-for="i in filteredId" class="item-description">
            <div class="row">
              <div class="col-sm-6 radios_id_photo">
                <a v-bind:href="'img/' + currentCategory + '/' + i.img + '_full.jpg'">
                  <img v-bind:src="'img/' + currentCategory + '/' + i.img + '_full.jpg'">
                </a>
              </div>
              <div class="col-sm-6 radios_id_desc">
                <h2 class="item-description_title">
                  {{ i.make }} {{ i.id }}
                </h2>
                <p>{{ i.description1 }}</p>
                <p>{{ i.description2 }}</p>
                <br>
                <h2 class="item-description_title">
                  Specifications:
                </h2>
                <p>Make: {{ i.make }}</p>
                <p>Model: {{ i.id }}</p>
                <p>Year: {{ i.year }}</p>
                <p>Casing: {{ i.case }}</p>
                <p>Speaker: {{ i.speaker }}</p>
                <p>Tuning type: {{ i.tuning_type }}</p>
                <p>Power requirements: {{ i.power }}</p>
                <p>Frequency: {{ i.frequency }}</p>
                <p>Measurements: {{ i.measurements }}</p>
              </div>
            </div>
          </div>
        </section>
        <div class="col-sm-12">
          reserve
        </div>
        </main>
        <!--/content box-->
        <!--/main item box-->
      </section>
      <!--end right side-->
    </div>
  </div>
  <footer class="row footer1">
    <vcFooter />
  </footer>
  <!-- end content -->
</div>
</template>
<script>
import axios from "axios";

import {router} from "../js/router.js";
import {store} from "../js/store.js";
import {radioCategories} from "../js/radiocategories.js";
import {categoryExists} from "../js/categoryexists.js";
import {removeParamColons} from "../js/removeparamcolons.js";

const vcCategories = () => import ('./vcCategories.vue');
const vcFeaturedItems = () => import ('./vcFeaturedItems.vue');
const vcCatDesc = () => import ('./vcCatDesc.vue');
const vcFooter = () => import ('./vcFooter.vue');
export default {
  data() {
      return {
        // API_DIR: "./src/js/ajax/",
        API_DIR: "https://raw.githubusercontent.com/liquidnuker/rvr2/master/src/js/ajax/",
        // radio displays
        currentCategory: "",
        filteredId: "",

        // category description
        categoryTitle: "",
        categoryDescription: "",
        categoryPreview: "",

        // breadcrumb
        bcVisible: false,
        bcCategory: "",
        bcId: ""
      }
    },
    components: {
      vcCategories: vcCategories,
      vcFeaturedItems: vcFeaturedItems,
      vcCatDesc: vcCatDesc,
      vcFooter: vcFooter
    },
    mounted: function () {
      this.checkCategory();
    },
    watch: {
      $route: function () {
        this.checkCategory();
      }
    },
    methods: {
      checkCategory: function () {
        // check if category exists
        let categoryToCheck = removeParamColons(this.$route.params.category)
        if (!categoryExists(categoryToCheck, radioCategories)) {
          console.log("404");
        } else {
          // set to currentCategory + breadcrumb
          this.currentCategory = categoryToCheck;
          this.bcCategory = categoryToCheck;

          // show category description
          this.showCatDesc();

          // loadItem
          this.loadItems();
        }
      },
      loadItems: function() {
        let filteredItem = "";
        let jsonUrl = this.API_DIR + this.currentCategory + ".json";
        
        axios.get(jsonUrl)
        .then((response) => {
          filteredItem = response.data[this.currentCategory].filter((el) => {
            return el.id === removeParamColons(this.$route.params.id);
          });
        })
        .then(() => {
          // check if id is undefined
          if (!filteredItem[0]) {
            console.log("404");
          } else {
            // attach to filteredId display + breadcrumb
            this.filteredId = filteredItem;
            this.bcId = filteredItem[0].id;

            // show breadcrumb
            this.bcVisible = true;
          }
        })
        .catch((error) => {
          console.log(error);
        });
      },
      // for category description
      showCatDesc: function() {
        let filteredDescription = "";
        const catDescUrl = "./src/js/ajax/catdesc.json";

        // filter description to show based on this.currentCategory
      axios.get(catDescUrl)
        .then((response) => {
          filteredDescription = response.data.catdesc.filter((el) => {
            return el.category === this.currentCategory;
          });
        })
        .then(() => {
          // set category description
          this.categoryTitle = filteredDescription[0].title;
          this.categoryDescription = filteredDescription[0].description;
          this.categoryPreview = filteredDescription[0].preview;

        })
        .catch((error) => {
          console.log(error);
        });
      }
    }
}
</script>
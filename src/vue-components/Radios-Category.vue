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
        <!--begin featured items -->
        <vcFeaturedItems />
        <!--/end featured items -->
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
            <p>{{ bcCategory }}</p>
          </div>
          <!-- end breadcrumb -->
        </div>
        <!--top paginator/perpage-->
        <div class="row col-sm-12">
          <div class="row jspager1_holder">
    
    <nav class="jspager1">
      <!-- page selector/firstlast/page buttons -->
      <!-- page selector -->
      <aside class="jspager1_totalpagesholder">
        <label for="jspager1_select">Page:</label>
        <p id="jspager1_currentpage"></p>
        <select id="jspager1_select" name="jspager1_select" class="jspager1_select" tabindex="0" v-model="currentPage" 
      @change="pageJump($event.target.value)">
        <option v-for="i in totalPages" :value="i">{{ i }}</option>
      </select>
        <p id="jspager1_totalpages">of {{ totalPages }}</p>
      </aside>
      <!-- /page selector -->
      <!-- firstlast -->
      <aside class="jspager1_prevnextholder">
        <!-- first -->
        <button id="jspager1_first" class="btn btn_first" tabindex="0" @click="showItems(1)">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        </svg>
        <span>First</span>
        </button>
        <!-- prev -->
        <button id="jspager1_prev" class="btn btn_prev" tabindex="0" @click="flip()">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        </svg>
        <span>Prev</span>
        </button>
        <!-- next -->
        <button id="jspager1_next" class="btn btn_next" tabindex="0" @click="flip('next')">
        <span>Next</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
        </svg>
        </button>
        <!-- last -->
        <button id="jspager1_last" class="btn btn_last" tabindex="0" @click="showItems(totalPages)">
        <span>Last</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
        </svg>
        </button>
      </aside>
      <!-- /firstlast -->
      
      <!-- page buttons -->
      <aside id="jspager1_pagebtnholder" class="jspager1_pagebtnholder"
        aria-atomic="true" aria-live="polite" aria-relevant="additions">
        <template v-for="(i, index) in buttonSet">
          <a v-if="i === currentPage" 
          class="jspager1_pagebtn jspager1_pagebtn--active" tabindex="0" 
          :aria-posinset="currentPage" aria-selected="true"
          @click="showItems(i)">{{ i }}</a>
          <a v-else class="jspager1_pagebtn" tabindex="0" 
          :aria-posinset="index + 1" @click="showItems(i)">
            {{ i }}
          </a>
        </template>
      </aside>
      <!-- /page buttons -->
      
      <!-- jump to page/perpage -->
      <!-- jump to page -->
      <aside class="jspager1_jumptopageholder">
        <label for="jspager1_jump">jump to page:&nbsp;</label>
        <input type="tel" name="jspager1_jump" id="jspager1_jump" class=" jspager1_jump" placeholder="" tabindex="0" 
        :value="toPage" v-model="toPage" @keyup.enter= "pageJump(toPage)" />
        <button id="jspager1_jumpbtn" class="btn" tabindex="0" 
        @keyup.enter= "pageJump(toPage)" @click= "pageJump(toPage)">Go</button>
      </aside>
      <!-- /jump to page -->
      
      <!-- perpage -->
      <aside class="jspager1_perpageholder">
        <label for="jspager1_perpage">perPage:&nbsp;</label>
        <select id="jspager1_perpage" name="jspager1_perpage"
       class="jspager1_perpage" tabindex="0" v-model="perPage" 
      @change="changePerPage($event.target.value)">
        <option v-for="i in perPageItems" :value="i">{{ i }}</option>
      </select>
      </aside>
      <!-- /perpage -->
    </nav>
  </div>
        </div>
        <!--end top paginator/perpage-->
        <!--ajax placeholder-->
        <section id="gallery-placeholder" class="col-sm-12">
          <div id="galleryContainer" class="row">
            <div v-for="i in itemList" id="gridder" class="col-xs-12 col-sm-4 col-md-3 col-lg-3">
              <div id="ajaxbox">
                <div class="ajaxbox-bg-skew">
                </div>
                <!-- /close bg skew -->
                <img v-bind:src="'img/' + currentCategory + '/' + i.img + '_thumb.jpg'" v-bind:id="i.id" v-bind:alt="i.id"
                v-on:click="pushRoute(currentCategory, i.id)">
                <div class="ajaxboxText">
                  <h2 class="model" v-bind:id="i.id">{{ i.model }}</h2><br>
                  <span class="make">{{ i.make }}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!--end ajax placeholder-->
        <!--bottom paginator-->
        <div class="col-sm-12">
          <div class="gallery-listing-paginator">
            bottom paginator
          </div>
        </div>
        <!--end bottom paginator-->
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

import Pager from "../js/pager.js";
import {pageBtns} from "../js/pagebtns.js";

import {jsonDir} from "../js/jsondir.js";

const vcCategories = () => import ('./vcCategories.vue');
const vcFeaturedItems = () => import ('./vcFeaturedItems.vue');
const vcCatDesc = () => import ('./vcCatDesc.vue');
const vcFooter = () => import ('./vcFooter.vue');

export default {
  data() {
      return {
        API_DIR: jsonDir,
        
        // radio displays
        currentItems: store.currentItems,
        currentCategory: "",
        itemList: "", // paginated items

        // category description
        categoryTitle: "",
        categoryDescription: "",
        categoryPreview: "",

        // breadcrumb
        bcVisible: false,
        bcCategory: "",

        // pager
      pg: "",
      perPage: 10,
      perPageItems: [10, 20, 50, 100],
      totalPages: "",
      currentPage: "",

      temp: "", // temp page buttons
      buttonSet: "",
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
      refreshItems: function () {
        this.currentItems = store.currentItems;
      },
      checkCategory: function () {
        // check if category exists
        let categoryToCheck = removeParamColons(this.$route.params.category)
        if (!categoryExists(categoryToCheck, radioCategories)) {
          console.log("404/ push to default items");
          router.push({
            path: "/radios/horntype"
          });
        } else {
          // set to currentCategory + breadcrumb
          this.currentCategory = categoryToCheck;
          this.bcCategory = categoryToCheck;

          // show category description
          this.showCatDesc();

          // loadItems
          this.loadItems();
        }
      },
      loadItems: function() {
        let jsonUrl = this.API_DIR + this.currentCategory + ".json";
        
        axios.get(jsonUrl)
        .then((response) => {
          // inject to store itemList 
          store.currentItems = response.data[this.currentCategory];
          // console.log(store.itemList.length + ": " + self.currentCategory);
        })
        .then(() => {
          this.refreshItems();
        })
        .then(() => {
          this.activatePager();
        })
        .catch(function (error) {
          console.log(error);
        });
      },
      // for category description
      showCatDesc: function() {
        let filteredDescription = "";
        const catDescUrl = "./src/js/ajax/catdesc.json";

        
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

          // show breadcrumb
          this.bcVisible = true;
        })
        .catch(function (error) {
          console.log(error);
        });
      },
      pushRoute: function (category, id) {
        router.push("/radios/:" + category + "/:" + id);
      },
      activatePager: function() {
      this.pg = null;
      this.pg = new Pager({
        perPage: this.perPage,
        data: this.currentItems
      });
      this.totalPages = this.pg.getTotalPages();
      
      this.setPageBtns();
      this.showItems(1);
    },
    showItems: function(num) {
      this.itemList = this.pg.page(num);
      this.currentPage = this.pg.currentPage;

      this.changePageBtns();
    },
    changePerPage: function(perPage) {
      console.log(perPage);
      this.perPage = perPage;
      this.activatePager();
    },
    flip: function(direction) {
      if (direction === "next") {
        this.showItems(this.pg.next());
      } else {
        this.showItems(this.pg.prev());
      }
    },
    setPageBtns: function() {
      this.temp = [];
      for (let i = 0, l = this.pg.getTotalPages(); i < l; i++) {
        this.temp.push(pageBtns(i, l));
      }
    },
    changePageBtns: function() {
      this.buttonSet = this.temp[this.pg.currentPage - 1];
    },
    pageJump: function(page) {
      this.showItems(Number(page));
    }
    }
}
</script>
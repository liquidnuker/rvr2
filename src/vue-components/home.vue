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
        <!--begin carousel_box-->
        <div class="row carousel_box">
          <!-- begin top carousel -->
          <vcHomeTopCarousel />
          <!-- end top carousel -->
        </div>
        <!--/carousel_box-->
        <!--main item box-->
        <!--begin subheader-->
        <div class="row row_subheader">
          <div class="col-sm-12">
            <!-- subheader -->&nbsp;
          </div>
        </div>
        <!--/subheader-->
        <!--begin content box-->
        <main class="row content_box">
        <div class="col-sm-12">
          <!--begin item container row1-->
          <div class="row item_container">
            <!-- begin vcHomeCatBox -->
            <vcHomeCatBox />
            <!-- end vcHomeCatBox -->
          </div>
          <!--/item container row1-->
        </div>
        </main>
        <!--/content box-->
        <!--begin subheader2-->
        <div class="row row_subheader">
          <div class="col-sm-12">
            <!-- subheader2 -->&nbsp;
          </div>
        </div>
        <!--/subheader2-->
        <!-- content_box2 -->
        <div class="row content_box">
          <!-- begin bottom carousel -->
          <vcHomeBottomCarousel />
          <!-- end bottom carousel -->
        </div>
        <!-- /content_box2 -->
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
const vcCategories = () =>
  import ('./vcCategories.vue');
const vcHomeCatBox = () =>
  import ('./vcHomeCatBox.vue');
const vcFeaturedItems = () =>
  import ('./vcFeaturedItems.vue');
const vcHomeTopCarousel = () =>
  import ('./vcHomeTopCarousel.vue');
const vcHomeBottomCarousel = () =>
  import ('./vcHomeBottomCarousel.vue');
const vcFooter = () =>
  import ('./vcFooter.vue');

export default {
  data() {
      return {}
    },
    components: {
      vcCategories: vcCategories,
      vcHomeCatBox: vcHomeCatBox,
      vcFeaturedItems: vcFeaturedItems,
      vcHomeTopCarousel: vcHomeTopCarousel,
      vcHomeBottomCarousel: vcHomeBottomCarousel,
      vcFooter: vcFooter
    },
    methods: {},
    mounted: function () {}
}
</script>
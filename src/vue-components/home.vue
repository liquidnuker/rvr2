<template>
<div>
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
</template>
<script>
const vcHomeCatBox = () =>
import ('./vcHomeCatBox.vue');
const vcHomeTopCarousel = () =>
import ('./vcHomeTopCarousel.vue');
const vcHomeBottomCarousel = () =>
import ('./vcHomeBottomCarousel.vue');
export default {
data() {
return {}
},
components: {
vcHomeCatBox: vcHomeCatBox,
vcHomeTopCarousel: vcHomeTopCarousel,
vcHomeBottomCarousel: vcHomeBottomCarousel,
},
methods: {},
mounted: function () {
  
}
}
</script>
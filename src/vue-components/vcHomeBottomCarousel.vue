<template>
<div>
<!-- siema2 -->
<div class="col-sm-12 brand_carousel">
  <div>
    <img src="" alt="" title="">
  </div>
  <div>
    <img src="" alt="" title="">
  </div>
  <div>
    <img src="" alt="" title="">
  </div>
  <div>
    <img src="" alt="" title="">
  </div>
  <div>
    <!-- <img src="img/brands/brand1.jpg"> -->
  </div>  
</div>
<!-- /siema2 -->  
</div>
</template>
<script>
import Siema from '../js/vendor/siema.min.js';
export default {
  data () {
    return {

    }
  },
  mounted: function () {
    // console.log("Home-BottomCarousel.vue mounted");
    const bottomCarousel = new Siema({
      selector: '.brand_carousel',
      duration: 600,
      easing: 'ease-out',
      perPage: 3,
      startIndex: 0,
      draggable: true,
      threshold: 20,
      loop: false,
      onInit: () => {    
      },
      onChange: () => {},
    });
    setInterval(() => bottomCarousel.next(), 2600)
  }
}
</script>
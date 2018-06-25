<template>
<div>
<!-- siema -->
<div class="col-sm-12 main_carousel">
  <div class="row">
    <section class="col-sm-4">
      <h2 class="main_carousel_title">
        Welcome!
      </h2>
      <p>to my collection of vintage and antique radios. Here you will find the Lorem ipsum dolor sit amet, consectetur adipisicing elit...<br><br>Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in cu...</p>
    </section>
    <div class="col-sm-8 main_carousel--right">
      <!-- <img src="img/ui/carousel_s1.jpg" alt=""> -->
    </div>
  </div>
  <div class="row">
    <section class="col-sm-4">
      <h2 class="main_carousel_title">
        Get fascinated
      </h2>
      <p>by the beauty and excellent craftmanship Lorem ipsum dolor sit amet...
      <br><br>Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in cu...</p>
    </section>
    <div class="col-sm-8 main_carousel--right">
      <!-- <img src="img/ui/carousel_s2.jpg" alt=""> -->
    </div>
  </div>
  <div class="row">
    <section class="col-sm-4">
      <h2 class="main_carousel_title">
        Lorem ipsum...
      </h2>
      <p>Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in cu...</p>
    </section>
    <div class="col-sm-8 main_carousel--right">
      <!-- <img src="img/ui/carousel_s3.jpg" alt=""> -->
    </div>
  </div>
</div>
<!-- /siema -->  
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
}
</script>
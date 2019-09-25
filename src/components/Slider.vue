<template>
  <!-- Slider -->
  <div class="clientwork_Slider" data-aos="fade-up">
    <swiper :options="swiperOption">
      <swiper-slide v-for="text in cwText" :key="text.work_photo">
        <b-container>
          <b-row>
            <b-col>
              <img :src="text.work_photo" alt="" class="work_logo" />
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="3"></b-col>
            <b-col lg="6">
              <b-container class="content_work">
                <b-row>
                  <b-col v-html="text.work_title" class="work_title"> </b-col>
                </b-row>
                <b-row>
                  <b-col
                    v-html="text.work_description"
                    class="work_description"
                  >
                  </b-col>
                </b-row>
                <b-row>
                  <b-col v-html="text.work_btn" class="work_btn"> </b-col>
                </b-row>
              </b-container>
            </b-col>
            <b-col cols="2"></b-col>
          </b-row>
        </b-container>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
  <!-- Slider End -->
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  props: {
    cwText: Array
  }
};
</script>

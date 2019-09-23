<template>
  <div class="clientwork_Slider" data-aos="fade-up">
    <swiper :options="swiperOption">
      <swiper-slide v-for="text in cwText" :key="text.work_photo">
        <b-container>
          <b-row>
            <b-col>
              <img :src="text.work_photo" alt="" class="workone_logo" />
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="3"></b-col>
            <b-col cols="5">
              <b-container class="content_workone">
                <b-row>
                  <b-col v-html="text.work_title" class="workone_title">
                  </b-col>
                </b-row>
                <b-row>
                  <b-col
                    v-html="text.work_description"
                    class="workone_description"
                  >
                  </b-col>
                </b-row>
                <b-row>
                  <b-col v-html="text.work_btn" class="btn_workone"> </b-col>
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
</template>

<!-- <b-container>
  <b-row>
    <b-col>
      <img src="@/assets/img/ec_logo.svg" alt="" class="workone_logo" />
    </b-col>
  </b-row>
  <b-row>
    <b-col cols="3"></b-col>
    <b-col cols="5">
      <b-container
        v-for="text in clientwork_txt"
        :key="text.workone_title"
        class="content_workone"
      >
        <b-row>
          <b-col v-html="text.workone_title" class="workone_title">
          </b-col>
        </b-row>
        <b-row>
          <b-col
            v-html="text.workone_description"
            class="workone_description"
          >
          </b-col>
        </b-row>
        <b-row>
          <b-col v-html="text.workone_btn" class="btn_workone"> </b-col>
        </b-row>
      </b-container>
    </b-col>
    <b-col cols="2"></b-col>
  </b-row>
</b-container> -->

<script>
// import $ from "jquery";
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
  // mounted() {
  //   $(document).ready(function() {
  //     $(".clientwork_Slider").slick();
  //   });
  // }
};
</script>

<template>
  <div class="clientwork_Slider">
    <b-container>
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
              <b-col v-html="text.workone_title" class="workone_title"> </b-col>
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
    </b-container>
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
    return {};
  }
  // mounted() {
  //   $(document).ready(function() {
  //     $(".clientwork_Slider").slick();
  //   });
  // }
};
</script>

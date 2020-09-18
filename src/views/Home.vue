<template>
  <div class="col-12 p-0">
    <div class="row px-3 px-lg-5">
      <div class="col-12">
        <h1 class="text-center text-primary py-5">Custom digital solutions</h1>
      </div>
    </div>
    <div class="row bg-dark px-3 px-lg-5">
      <div class="p-0 col-12 col-lg-6 py-4 text-light m-auto">
        <h4 class="text-primary p-2 m-0">Web Design</h4>
        <p class="px-3 m-0">We build, host, and maintain, beautiful mobile friendly sites.</p>

        <h4 class="text-primary p-2 m-0">site managment tools</h4>
        <p
          class="px-3 m-0"
        >We provide tools to help you maintain your site or run e-mail marketing campagns.</p>
        <h4 class="text-primary p-2 m-0">PPC ( pay per click ) advertizing</h4>
        <p
          class="px-3 m-0"
        >We can properly optimize you're ad campagn. Through social media and search engines</p>
      </div>
      <div class="p-0 col-12 col-lg-6 text-light m-auto">
        <div class="pos-rel p-0 pt-lg-4 m-auto">
          <div class="d-flex justify-content-center">
            <img
              class="drop-img img-1 img-fluid mx-3 mx-lg-4 shadow"
              src="https://images.unsplash.com/photo-1465244554671-e501f19a3bb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
              alt
            />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div
        class="col-12 col-lg-6 d-flex justify-content-center py-4 order-2 order-lg-1 d-flex flex-column"
      >
        <div class="img-container-1">
          <img
            class="img-fluid shadow"
            src="https://www.smeventure.com/wp-content/uploads/2018/11/cloud-computing.jpeg"
            alt
          />
        </div>
        <h4 class="text-primary p-2 py-lg-4 m-0">a plan talored to your bussiness</h4>

        <p>We provide a free consoltaion to talk about you're companies needs. Not everyones situation is the same. we want to take the time to see how we can best help you accomplish you're goals. We provide an array of services to make this process easy and fit any budget. If your just getting started or growing your business we can create a plan just for you.</p>
      </div>
      <div class="spacer-top-2 col-12 col-lg-6 order-1 order-lg-2">
        <h4 class="text-primary m-0">Cementing your digital precence</h4>

        <p
          class="px-3 m-0"
        >Navigating the online world can be intimidating and take time. We provide an array of services to make this prossess easy and fit any budget. Just getting started or growing you company we can create a plan just for you.</p>
      </div>
    </div>
    <div class="row bg-secondary py-3 my-3">
      <div class="col-lg-6 col-12">
        <p>
          Call us today for a free consoltaion.
          <b class="text-dark">208-695-4231</b>
        </p>
        <form class="d-flex justify-content-center align-items-center p-4">
          <!-- <div class="ml-5 bg-dark shadow text-primary form-container">
            <h4>Get in touch</h4>
            <label class="m-0 pt-2 text-light">Name</label>
            <br />
            <input class="p-1 w-100" type="text" />
            <br />
            <label class="m-0 pt-2 text-light">E-mail</label>
            <br />
            <input class="p-1 w-100" type="text" />
            <br />
            <label class="m-0 pt-2 text-light">E-mail</label>
            <br />
            <textarea class="p-1 w-100" rows="5"></textarea>
            <br />
            <button class="btn btn-primary mt-3 px-5">Join</button>
          </div>-->
        </form>
      </div>
      <div class="col-lg-6 col-12">
        <!-- <form class="d-flex justify-content-center align-items-center p-4">
          <div class="ml-5 text-primary form-container bg-dark shadow">
            <h4>Join our e-mail list</h4>
            <label class="text-light">E-mail</label>
            <br />
            <input class="p-1 w-100" type="text" />
            <br />
            <button class="btn btn-primary mt-3 px-5">Join</button>
          </div>
        </form>-->
      </div>
    </div>
  </div>
</template>

<script>
import Services from "../components/ServicesComp";

export default {
  name: "Home",
  components: {},
};
</script>

<style>
.img-container-1 {
  overflow: hidden;
  max-height: 450px;
}
.form-container {
  width: 500px;

  padding: 2rem;
}
.pos-rel {
  position: relative;
}
.img-1 {
  position: absolute;
  max-height: 450px;
  bottom: -20rem;
}
.img-2 {
  max-height: 450px;
  top: 100px;
}
.spacer-top-2 {
  padding-top: 14rem;
}
@media only screen and (max-width: 992px) {
  .drop-img {
    max-height: 300px;
  }
  .img-1 {
    max-height: 500px;
    top: 0.7rem;
    position: relative;
  }
  .img-2 {
    max-height: 450px;
    top: 100px;
  }
  .spacer-top-2 {
    padding-top: 2rem;
  }
}
</style>

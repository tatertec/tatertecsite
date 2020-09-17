<template>
  <div class="col-12 p-0">
    <div class="row px-3 px-lg-5">
      <div class="col-12">
        <h1 class="text-center text-primary py-5">More than web design</h1>
      </div>
    </div>
    <div class="row bg-dark px-3 px-lg-5">
      <div class="p-0 col-12 col-lg-6 py-4 text-light">
        <h3 class="text-primary p-2 m-0">Seo</h3>
        <p
          class="px-3 m-0"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ad dolore at voluptatum ipsum animi incidunt assumenda recusandae</p>

        <h3 class="text-primary p-2 m-0">Marketing</h3>
        <p
          class="px-3 m-0"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ad dolore at voluptatum ipsum animi incidunt assumenda recusandae</p>
        <h3 class="text-primary p-2 m-0">social media</h3>
        <p
          class="px-3 m-0"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ad dolore at voluptatum ipsum animi incidunt assumenda recusandae</p>
      </div>
      <div class="p-0 col-12 col-lg-6 text-light">
        <h3 class="text-primary p-2 py-lg-4 m-0">Marketing plan talored to your bussiness</h3>
        <p
          class="px-3 m-0"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ad dolore at voluptatum ipsum animi incidunt assumenda recusandae</p>
        <div class="pos-rel p-0 pt-lg-4 m-auto">
          <div class="d-flex justify-content-center">
            <img
              class="drop-img img-1 img-fluid mx-2 mx-lg-4 shadow"
              src="https://images.unsplash.com/photo-1465244554671-e501f19a3bb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
              alt
            />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-lg-6 d-flex justify-content-center py-4 order-2 order-lg-1">
        <div>
          <img
            class="img-fluid shadow"
            src="https://www.smeventure.com/wp-content/uploads/2018/11/cloud-computing.jpeg"
            alt
          />
        </div>
      </div>
      <div class="spacer-top-2 col-12 col-lg-6 order-1 order-lg-2">
        <h3 class="text-primary">Cementing your digital precence</h3>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo hic recusandae esse maiores qui cum quae distinctio reprehenderit. Doloremque fuga ipsa quas sed enim inventore aliquid nesciunt quae quaerat ipsum?</p>
      </div>
    </div>
    <div class="row bg-secondary py-3 my-3">
      <div class="col-lg-6 col-12">
        <p>
          Contact us today for a free consoltaion
          <b class="text-dark">208-695-4231</b>
        </p>
        <!-- <form class="d-flex justify-content-center align-items-center p-4">
          <div class="ml-5 bg-dark shadow text-primary form-container">
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
          </div>
        </form>
      </div>
      <div class="col-lg-6 col-12">
        <form class="d-flex justify-content-center align-items-center p-4">
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
  top: 100px;
}
.img-2 {
  max-height: 450px;
  top: 100px;
}
.spacer-top-2 {
  padding-top: 350px;
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

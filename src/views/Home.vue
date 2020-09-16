<template>
  <div class="col-12 p-0">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center text-primary py-5">More than web design</h1>
      </div>
    </div>
    <div class="row">
      <div class="p-0 col-12 col-lg-6 py-4 bg-dark text-light">
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
      <div class="p-0 col-12 col-lg-6 bg-dark text-light">
        <h3 class="text-primary p-2 py-lg-4 m-0">Marketing plan talored to your bussiness</h3>
        <p
          class="px-3 m-0"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ad dolore at voluptatum ipsum animi incidunt assumenda recusandae</p>
        <div class="pos-rel pt-4 m-auto">
          <div class="d-flex justify-content-center">
            <img class="img-fluid img-1 p-2 p-lg-4" src="https://placehold.it/500x400" alt />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-lg-6 spacer-top-1">
        <img class="img-fluid" src="https://placehold.it/500x400" alt />
      </div>
      <div class="spacer-top-2 col-12 col-lg-6">
        <h3>Cementing your digital precence</h3>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo hic recusandae esse maiores qui cum quae distinctio reprehenderit. Doloremque fuga ipsa quas sed enim inventore aliquid nesciunt quae quaerat ipsum?</p>
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
.pos-rel {
  position: relative;
}
.img-1 {
  position: absolute;
  top: 100px;
}

.spacer-top-1 {
  padding-top: 50px;
}
.spacer-top-2 {
  padding-top: 300px;
}
@media only screen and (max-width: 942px) {
  .spacer-top-1 {
    padding: 0.5rem;
  }
  .img-1 {
    position: relative;
  }
}
</style>

<template>
  <div class="col-12 col-lg-7 col-md-9 col-sm-11 py-5 m-auto p-0 text-center">
    <h3>Feature comming soon</h3>
    <button class="btn btn-dark text-light my-3 p-3 px-5">
      <h3 class="m-0 p-0">
        <i class="fas fa-camera"></i>
      </h3>
    </button>
    <input class="d-none" ref="picture-file" type="file" />
    <br />
    <img
      class="preview-img"
      src="https://placehold.it/500x500?text=please%20select%20a%20file"
      alt
    />
    <br />
    <button class="btn btn-primary my-3">Submit</button>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
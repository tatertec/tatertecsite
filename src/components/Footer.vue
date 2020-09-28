<template>
  <div class="row bg-dark py-4">
    <div class="col-12 text-light">
      <div class="row d-flex justify-content-around">
        <div class="col-12 col-md-3 py-4 col-sm-6">
          <div class="text-center">
            <h4 class="text-info">CONTACT</h4>
            <div class="">
              <h4>
                <br />
                <a
                  title="2086954231"
                  class="call-btn text-light p-2"
                  href="tel:2086954231"
                  ><i class="fas fa-phone-alt"></i
                ></a>
                208-695-4231
                <br />
                <br />

                <a
                  title="tatertec@gmail.com"
                  class="email-btn text-light p-2"
                  :href="`mailto:tatertec@gmail.com?subject = ${siteId}&body = buttonEmail.....`"
                >
                  <i class="far fa-envelope"></i>
                </a>
                tatertec@gmail.com
              </h4>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-3 py-4 col-sm-6">
          <div class="text-center">
            <h4 class="text-info">HOURS</h4>
            <br />
            <h4>Monday - Friday 8-5</h4>
            <br />
            <h4>Saturday -Sunday closed</h4>
          </div>
        </div>
        <div class="col-12 col-md-3 py-4">
          <div class="text-center text-info">
            <h4>SOCIAL MEDIA</h4>
            <br />
            <div class="d-flex justify-content-center">
              <h4>
                <a
                  class="link"
                  target="_blank"
                  href="https://www.linkedin.com/company/tatertec"
                >
                  <i class="m-2 link fab fa-linkedin-in text-light"></i>
                </a>
                <a
                  class="link"
                  target="_blank"
                  href="https://www.facebook.com/TaterTec-101971145006753/"
                >
                  <i class="m-2 link fab fa-facebook-f text-light"></i>
                </a>
                <a
                  class="link"
                  target="_blank"
                  href="https://www.instagram.com/tatertec"
                >
                  <i class="m-2 link fab fa-instagram text-light"></i>
                </a>

                <a
                  class="link"
                  target="_blank"
                  href="https://twitter.com/TaterTec"
                >
                  <i class="m-2 link fab fa-twitter text-light"></i>
                </a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.link:hover {
  color: rgb(59, 196, 200) !important;
}
</style>

<template>
  <div class="row bg-dark py-4">
    <div class="col-12 text-light">
      <div class="row d-flex justify-content-around py-5">
        <div class="p-0 col-12 col-md-4 col-sm-6">
          <div class="text-center">
            <h4 class="text-info">CONTACT</h4>
            <div class="">
              <h4>
                <a
                  title="2086954231"
                  class="call-btn text-light"
                  href="tel:2086954231"
                  ><i class="px-2 px-lg-3 fas fa-phone-alt link"></i
                ></a>

                <a
                  title="tatertec@gmail.com"
                  class="email-btn text-light"
                  :href="`mailto:tatertec@gmail.com?subject = ${siteId}&body = buttonEmail.....`"
                >
                  <i class="px-2 px-lg-3 far fa-envelope link"></i>
                </a>
              </h4>
            </div>
          </div>
        </div>
        <div class="p-0 col-12 col-md-4">
          <div class="text-center text-info">
            <h4>SOCIAL MEDIA</h4>

            <div class="d-flex justify-content-center">
              <h4>
                <a
                  class="link"
                  target="_blank"
                  href="https://www.linkedin.com/company/tatertec"
                >
                  <i class="mx-2 link fab fa-linkedin-in text-light"></i>
                </a>
                <a
                  class="link"
                  target="_blank"
                  href="https://www.facebook.com/TaterTec-101971145006753/"
                >
                  <i class="mx-2 link fab fa-facebook-f text-light"></i>
                </a>
                <a
                  class="link"
                  target="_blank"
                  href="https://www.instagram.com/tatertec"
                >
                  <i class="mx-2 link fab fa-instagram text-light"></i>
                </a>

                <a
                  class="link"
                  target="_blank"
                  href="https://twitter.com/TaterTec"
                >
                  <i class="mx-2 link fab fa-twitter text-light"></i>
                </a>
              </h4>
            </div>
          </div>
        </div>
        <div class="p-0 col-12 col-md-4 col-sm-6">
          <div class="text-center">
            <h4 class="text-info">HOURS</h4>

            <h4>Mon - Fri 8-5</h4>

            <h4>Saturday -Sunday closed</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style >
.link:hover {
  color: rgb(59, 196, 200) !important;
}
h4 {
  font-size: small;
}

@media only screen and (max-width: 992px) {
  h4 {
    font-size: small;
  }
}
</style>

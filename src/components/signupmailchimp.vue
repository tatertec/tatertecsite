<template>
  <div>
    <h4>Join our e-mail list</h4>
    <!-- <label class="text-light">E-mail</label>
            <br />
            <input v-model="clubEmail" class="p-1 w-100" type="text" />
            <br />
            <button @click="addToEmailList" class="btn btn-primary mt-3 px-5">
              Join
            </button> -->
    <div id="mc_embed_signup" class="pt-2">
      <form
        action="https://gmail.us2.list-manage.com/subscribe/post?u=bdfa11b8ddbcf6123b2e21b4a&amp;id=c3dbd0038c"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
        novalidate
      >
        <div id="mc_embed_signup_scroll">
          <label class="p-0 m-0 text-light">E-mail</label>
          <input
            type="email"
            value=""
            name="EMAIL"
            class="p-1 w-100"
            id="mce-EMAIL"
            placeholder="email address"
            required
          />
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px" aria-hidden="true">
            <input
              type="text"
              name="b_bdfa11b8ddbcf6123b2e21b4a_c3dbd0038c"
              tabindex="-1"
              value=""
            />
          </div>

          <div class="clear mt-3">
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              class="btn btn-primary text-light px-5 my-2"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
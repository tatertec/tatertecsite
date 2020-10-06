<template>
  <div class="col-12 p-0">
    <div class="row bg-light">
      <div class="col-12 p-0">
        <h1 class="text-center py-5">Custom digital solutions</h1>
      </div>
    </div>
    <div class="row bg-dark px-3 px-lg-5">
      <div class="p-0 col-12 col-lg-6 py-4 text-light m-auto">
        <h4 class="text-primary p-2 m-0">Web Design</h4>
        <p class="px-3 m-0">
          We build, host, and maintain, beautiful mobile-friendly sites.
        </p>

        <h4 class="text-primary p-2 m-0">Site management tools</h4>
        <p class="px-3 m-0">
          We provide a bunch of tools to maintain and update your website
          content.
        </p>
        <h4 class="text-primary p-2 m-0">PPC ( pay per click ) advertizing</h4>
        <p class="px-3 m-0">
          We can optimize your ad campaign. Through social media and search
          engines.
        </p>
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
        <h3 class="text-dark p-2 py-lg-4 m-0">
          A plan tailored to your business.
        </h3>

        <p>
          We provide a free consultation to talk about your companies needs. Not
          everyone's situation is the same. We take the time to see how we can
          best help you accomplish your goals. We provide an array of services
          to help any size business accomplish there goals.
        </p>
      </div>
      <div class="spacer-top-2 col-12 col-lg-6 order-1 order-lg-2">
        <h3 class="text-dark m-0">Cementing your digital precence</h3>

        <p class="px-3 m-0">
          Every bussiness can benifit from having a social media account, google
          bussiness listing, yelp ect. We can help set up and optomize every
          aspect of your digital presence and link all of your accounts. Having
          a website in 2020 is like having business card. It helps you come off
          more profesinal and is a great place to show off your bussness where
          anyone can find it. You can also use your site to drive sales with the
          power of PPC(pay per click) advertizing email marketing or text
          marketing.
        </p>
      </div>
    </div>
    <div class="row bg-secondary">
      <div class="col-lg-6 col-12 p-0">
        <MessageForm />
        <!-- <form class="d-flex justify-content-center align-items-center p-lg-4">
          <div class="bg-dark shadow text-primary form-container">
            <h4>Get in touch</h4>
            <label class="m-0 pt-2 text-light">Name</label>
            <br />
            <input v-model="senderName" class="p-1 w-100" type="text" />
            <br />
            <label class="m-0 pt-2 text-light">E-mail</label>
            <br />
            <input v-model="senderEmail" class="p-1 w-100" type="text" />
            <br />
            <label class="m-0 pt-2 text-light">Phone number</label>
            <br />
            <input v-model="senderPhoneNumber" class="p-1 w-100" type="text" />
            <br />
            <label class="m-0 pt-2 text-light">Message</label>
            <br />
            <textarea v-model="body" class="p-1 w-100" rows="5"></textarea>
            <br />
            <button
              @click="submitMessageForm"
              class="btn btn-primary mt-3 px-5"
            >
              Send message
            </button>
          </div>
        </form> -->
      </div>
      <div class="col-lg-6 col-12 p-0">
        <form
          class="d-flex justify-content-center align-items-center py-4 p-lg-4"
        >
          <div class="text-primary form-container bg-dark shadow">
            <MailJoinForm />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import MailJoinForm from "../components/signupmailchimp";
import MessageForm from "../components/messageForm";
export default {
  name: "Home",

  data() {
    return {
      //note form data
      // senderName: "",
      // senderEmail: "",
      // senderPhoneNumber: "",
      // body: "",
      //note email list data
      clubEmail: "",
    };
  },

  methods: {
    submitMessageForm() {
      let data = {
        senderName: this.senderName,
        senderEmail: this.senderEmail,
        senderPhoneNumber: this.senderPhoneNumber,
        body: this.body,
      };
      this.$store.dispatch("sendMessage", data);
    },
    addToEmailList() {},
  },

  components: { MessageForm, MailJoinForm },
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

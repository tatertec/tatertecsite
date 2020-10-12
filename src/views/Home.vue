<template>
  <div class="col-12 p-0">
    <div class="row slant-1 p-0 d-flex align-items-center justify-content-center">
      <div class="col-12 col-lg-6 p-0 order-lg-2 text-dark d-flex align-items-center flex-column">
        <h1 class="py-5">
          Getting started with SEO for free
        </h1>
        <div  class="input-box">
        <input type="text" class="input p-1 my-2" placeholder="Name">
        </div>
     <div class="input-box">
        <input type="text" class="input p-1 my-2" placeholder="Phone">
     </div>
     <div class="input-box">
        <input type="text" class="input p-1 my-2" placeholder="E-mail">
     </div>
        <button class="btn-primary btn my-3">Get started now</button>
      </div>
       <div class="col-lg-6 col-12 order-lg-1 p-0 text-center">
        <div class="img-container-1 text-center m-auto">

        <img
          class="img-fluid"
          src="../assets/googlelogo.png"
          alt
        />
        </div>
      </div>
    </div>

    <div class="row pt-5 mt-5">
      <div class="px-4 col-12 col-lg-6 p-0 bg-primary py-3 mt-5">
        <h2 class="text-dark m-0 p-3">
          A taylored plan to grow your Boise business</h2>
        <p class="px-3 m-0">
          We provide a free consultation to talk about your companies needs. Not
          everyone's situation is the same. We take the time to see how we can
          best help you accomplish your goals. We provide an array of services
          to help any size business accomplish there goals.
        </p>
      </div>
      <div class=" px-4 col-12 col-lg-6 bg-primary py-3 mt-5">
        <h2 class="text-dark m-0 p-3">We focus on the power of SEO, Social media, and ppc advertizing</h2>

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
      </div>
      <div class="col-lg-6 col-12 p-0">
        <form
          class="d-flex justify-content-center align-items-center py-4 p-lg-4"
        >
          <div class="text-primary form-container bg-dark shadow">
            <Signupmailchimp />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Signupmailchimp from "../components/signupmailchimp";
import MessageForm from "../components/messageForm";
export default {
  name: "Home",

  data() {
    return {};
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
  },

  components: { MessageForm, Signupmailchimp },
};
</script>

<style>


.slant-1 {
  background-image: linear-gradient(
    to bottom right,
     rgba(0, 0, 0, 0.013),
     rgba(3, 3, 3, 0.295)
  
  );
box-shadow: 5px 5px 5px black;
  height: 80vh;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 0%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 66%, 0 100%);
}

.img-container-1 {
  width:80%;
  max-width: 600px;
}

@media only screen and (max-width: 992px) {

  .slant-1 {
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 0%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }

.img-container-1 {
  width:80vw;
  max-width:400px;
} 

}
</style>

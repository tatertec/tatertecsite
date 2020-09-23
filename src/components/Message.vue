<template>
  <div class="row">
    <div class="col-lg-4 m-auto col-12 p-3 shadow bg-light">
      <div class="row">
        <div class="col-12 d-flex justify-content-between p-3">
          <div class>
            <div class>
              <p>
                <b>Name:</b>
                {{message.senderName}}
              </p>
            </div>
            <div class>
              <p>
                <b>Email:</b>
                {{message.senderEmail}}
              </p>
            </div>
            <div class>
              <p>
                <b>Message:</b>
                {{message.body}}
              </p>
            </div>
          </div>
          <div class="d-flex flex-column justify-content-around p-2">
            <button class="btn btn-primary">Reply</button>
            <button class="btn btn-danger text-light">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "messageComponent",
  props: ["message"],
};
</script>

<style>
</style>
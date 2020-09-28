<template>
  <div>
    <div
      class="modal bg-dark fade"
      id="purchaseModal"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="purchaseModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content bg-light">
          <div class="modal-header">
            <h5 class="modal-title" id="purchaseModalLabel">Purchase</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>
              This will be avalable soon please call us if you need more texts
            </p>
            <hr />

            <button
              @click="saveAll"
              type="button"
              class="btn btn-success"
              data-dismiss="modal"
            >
              Submit
            </button>
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
</style>
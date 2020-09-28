<template>
  <div>
    <div
      class="modal bg-dark fade"
      id="upgradeAccountModal"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="upgradeAccountModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content bg-light">
          <div class="modal-header">
            <h5 class="modal-title" id="upgradeAccountModalLabel">Upgrade</h5>
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
            <h3>Upgrade account</h3>
            <hr />
            <p>
              This will be avalable soon please give us a call to upgrade now.
            </p>
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
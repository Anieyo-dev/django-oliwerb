<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Register:</h5>
      <form>
        <div class="mb-3">
          <label for="emailInput" class="form-label">{{
            $t("lng_key_addresEmail")
          }}</label>
          <input type="email" class="form-control" id="emailInput" />
        </div>
        <div class="mb-3">
          <label for="passwordInput" class="form-label">{{
            $t("lng_key_password")
          }}</label>
          <input type="password" class="form-control" id="passwordInput" />
        </div>
        <div class="mb-3">
          <label for="passwordInput2" class="form-label">{{
            $t("lng_key_password", { msg: $t("lng_key_repeat") })
          }}</label>
          <input type="password" class="form-control" id="password2Input" />
        </div>
        <p>
          If you have an account already, click
          <em @click="loginRoute">here</em>.
        </p>
        <button type="submit" @click="register" class="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { ref } from 'vue';

const email = ref<string>();
const password = ref<string>();
const password2 = ref<string>();

function loginRoute() {
  router.push("/login");
}

function register() {};

</script>

<style scoped>
.card {
  display: flex;
  margin: auto;
  width: 500px;
}

p em {
  color: red;
}
</style>

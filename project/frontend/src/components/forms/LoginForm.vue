<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ $t("lng_key_login") }}:</h5>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            {{ $t("lng_key_addresEmail") }}
          </label>
          <input
            :type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            {{ $t("lng_key_password") }}
          </label>
          <input
            :type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <p>
          {{ $t("lng_key_unregisteredDesc") }}
          <em @click="registerRoute">{{ $t("lng_key_here") }}.</em>
        </p>
        <p>
          {{ $t("lng_key_forgotPasswordDesc") }}
          <em @click="resetPasswordRoute">{{ $t("lng_key_here") }}.</em>
        </p>
        <button type="submit" @click="login" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";
import { ref } from "vue";

const email = ref<string>();
const password = ref<string>();

function registerRoute() {
  router.push("/register");
}

function resetPasswordRoute() {
  router.push("/reset_password");
}

function login() {
  router.push("/");
}
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

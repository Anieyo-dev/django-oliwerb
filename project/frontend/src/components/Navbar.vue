<template>
  <nav class="navbar bg-light">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">Navbar</span>
      <p>{{ $t("lng_key_hello") }} {{ $t("lng_key_world") }}</p>
      <div class="locale-changer">
        <select v-model="$i18n.locale">
          <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
            {{ lang }}
          </option>
        </select>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const langs = ref<string[]>(["en", "pl", "de"])


</script>
<style lang="scss">
.navbar {
  $navbar-light-color: rgba(black, 0.1);
}
</style>

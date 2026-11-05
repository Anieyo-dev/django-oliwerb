<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">Reset Password:</h5>
            <form>
                <div class=mb-3>
                    <label for="" class="form-label">Email Address:</label>
                    <input type="email" class="form-control">
                </div>
                <div class="buttonCon">
                    <button type="submit" @click="resetPassword" class="btn btn-primary">Reset</button>
                    <button @click="loginRoute()" class="btn btn-primary">Back</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { ref } from 'vue';

const email = ref<string>();

function resetPassword() {

}

function loginRoute() {
    router.push("/login")
}
</script>

<style scoped>
.card {
    display: flex;
    margin: auto;
    width:500px;
}
.buttonCon {
    display: flex;
    flex-direction: row;
    gap: 5px;
}
</style>
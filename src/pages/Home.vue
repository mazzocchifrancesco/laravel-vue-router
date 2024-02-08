<script>
import AppEventList from "../components/AppEventList.vue"

export default {
    name: "home",
    components: {
        AppEventList
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <h1 class="mb-3">Home</h1>
        </div>
    </div>
    <AppEventList />
</template>

<style scoped></style>
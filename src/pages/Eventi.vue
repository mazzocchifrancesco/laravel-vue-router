<script>
import { store } from "../store.js"
import EventCard from "../components/EventCard.vue"


export default {
    name: "Eventi",
    components: {
        EventCard
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <h1 class="mb-3">Eventi</h1>
        </div>
        <div class="row g-4">

            <EventCard v-for="evento in store.eventList" :evento="evento" />
        </div>
    </div>
</template>

<style scoped></style>
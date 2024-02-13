<script>
export default {
    name: "EventCard",
    props: ["evento"],
    methods: {
        //recupera immagini
        getImage(img) {
            return new URL(img, import.meta.url).href
        },
    }
}

</script>

<template>
    <div class="card col-md-5 me-5">
        <div class="card-header">{{ evento.event_date }}</div>

        <div class="card-body">
            <div class="imgBoxIndex rounded my-3">
                <img class="cardImg rounded" :src="getImage(evento.image)" alt=evento.image>
            </div>
            <h5 class="card-title">{{ evento.name }}</h5>
            <p class="card-text">Restano <b>{{ evento.available_tickets }}</b> biglietti disponibili.
            </p>
        </div>
        <div class="card-footer text-center">
            <router-link :to="{ name: 'event-details', params: { id: evento.id } }" class=" btn-primary">
                <font-awesome-icon icon="fa-solid fa-circle-info fa-2xl" class="" />
            </router-link>

        </div>
    </div>
</template>
<style scoped>
.cardImg {
    max-width: 100%;
    min-height: 100%;
    object-fit: cover;
}

.imgBoxIndex {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 15rem;

}
</style>
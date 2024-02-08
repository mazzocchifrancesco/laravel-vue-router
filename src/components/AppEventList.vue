<script>
import { store } from "../store.js" //state management

export default {
    name: "AppEventList",
    data() {
        return {
            store
        }
    },
    methods: {
        //recupera immagini
        getImage(img) {
            return new URL(img, import.meta.url).href
        },
    }
}
</script>

<template>
    <div>
        <h1>Eventi</h1>

        <div class="container">
            <div class="row">

                <div class="col-md-4 gy-4" v-for="evento in store.eventList">
                    <div class="card h-100">
                        <div class="card-header">{{ evento.date }}</div>

                        <div class="card-body">
                            <div class="imgBoxIndex rounded">
                                <img class="cardImg rounded" :src="getImage(evento.image)" alt=evento.image>
                            </div>
                            <h5 class="card-title">{{ evento.name }}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">{{ evento.user.name }}</h6>
                            <p class="card-text">Restano <b>{{ evento.available_tickets }}</b> biglietti disponibili.
                            </p>
                        </div>
                        <div class="card-footer text-center">
                            <a href="#" class=" btn-primary">
                                <font-awesome-icon icon="fa-solid fa-circle-info fa-2xl" class="" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>
<script>
import { store } from "../store.js"
import axios from 'axios';
export default {
    name: "EventDetails",
    props: ["id"],
    data() {
        return {
            store,
            evento: null
        }
    },
    mounted() {
        this.getEventDetail();
    },
    methods: {
        getEventDetail() {

            let url = this.store.apiUrl + this.store.apiEventEndpoint + this.id;
            console.log(url);

            axios.get(url).then(risultato => {
                if (risultato.status === 200 && risultato.data.success) {
                    console.log(risultato.data.payload);
                    this.evento = risultato.data.payload;
                } else {
                    console.error("Ops... qualcosa è andato storto");
                }
            }).catch(errore => {
                console.error(errore);
            });
        },
        getImage(img) {
            return new URL(img, import.meta.url).href
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 gy-4">
                <div v-if="!evento">Caricamento dati in corso</div>
                <div class="card h-100" v-else>
                    <div class="card-header">{{ evento?.date }}</div>
                    <div class="card-body">
                        <div class="imgBoxIndex rounded ">
                            <img class="cardImg rounded" :src="getImage(evento.image)" alt=evento.image>
                        </div>
                        <h5 class="card-title my-5 fs-3">{{ evento?.name }}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">
                            {{ evento?.user ? evento?.user.name : "Utente sconosciuto" }}
                        </h6>
                        <p class="card-text">Restano <b>{{ evento?.available_tickets }}</b> biglietti disponibili.
                        </p>
                        <p><strong>Dove: </strong>{{ evento?.location }}</p>
                        <p><strong>Quando: </strong>{{ evento?.event_date }}</p>
                        <p><strong>Organizzatore: </strong>{{ evento?.organizer }}</p>


                    </div>
                </div>
            </div>
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
    height: 40rem;

}
</style>
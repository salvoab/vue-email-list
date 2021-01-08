/* ****************************************************************************************************
Generate una Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
Il numero ottenuto appare al centro del quadrato
****************************************************************************************************** */

let app = new Vue({
    el: '#app',
    data:{
        randomNumbers: []
    },
    methods:{
        getRandomNumber(index){
            axios.get('https://flynn.boolean.careers/exercises/api/random/int')
                .then(response =>{
                    // Uso splice per modificicare l'elemento in posizione index
                    // se uso direttamente la notazione randomNumbers[index], Vue non vedrà il cambiamento dell'array e non renderizzerà i nuovi valori 
                    this.randomNumbers.splice(index, 1, response.data.response)
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
    mounted(){
        const gridDimension = 6 * 6;
        for(let i=0; i<gridDimension; i++){
            this.randomNumbers.push(0);
        }
    }
});
let app = new Vue({
    el: '#app',
    data:{
        emails: []
    },
    mounted(){
        const emailsQuantity = 10;
        const emailsRequests = [];
        // Faccio 'emailsQuantity' richieste get concorrenti
        for(let i=0; i<emailsQuantity; i++){
           emailsRequests.push(axios.get('https://flynn.boolean.careers/exercises/api/random/mail'));
        }

        // Aggiungo le emails nell'array this.emails dopo che tutte le richieste get concorrenti hanno dato una risposta
        Promise.all(emailsRequests)
            .then(results => results.forEach(result => this.emails.push(result.data.response)))
            .catch(error => console.log(error));
    }
});
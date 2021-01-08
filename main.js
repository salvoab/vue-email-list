let app = new Vue({
    el: '#app',
    data:{
        emails: []
    },
    mounted(){
        const emailsQuantity = 10;
        for(let i=0; i<emailsQuantity; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(response =>{
                    this.emails.push(response.data.response);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
});
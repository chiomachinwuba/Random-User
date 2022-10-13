//create a variable called app and set it to Vue so we can get access to this object bcos of the cdn and then we call create app, we can pass in diff things
const app = Vue.createApp({
    //creating data as a fxn and it needs to return an object
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')    //to get a random api we use this
            const { results } = await res.json()
            //console.log(this.firstName)   we can access any of the data with 'this' keyword
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email =  results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        },
    },
})
//if we want to mount the app to the div on the Html, and pass in whatever selector, which is the id app in the Html
app.mount('#app')

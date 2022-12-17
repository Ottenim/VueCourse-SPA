const app = Vue.createApp({
    //data, functions
    //template: '<h2>Template created from Vue</h2>'
    data() {
        return {
            url: 'https://google.com',
            showUser: true,
            users: 
            [ 
                { 
                    name: 'Gabriel',
                    age: '22',
                    dob: '30/10/2000',
                    img: 'assets/gatinho.jpg',
                    isFav: true
                },
                {
                    name: 'Savia',
                    age: '21',
                    dob: '15/09/2000',
                    img: 'assets/gatinho2.jpg',
                    isFav: false
                },
                {
                    name: 'Minetto',
                    age: '23',
                    dob: '01/07/2000',
                    img: 'assets/gatinho3.jpg',
                    isFav: true
                }
            ],
            x: 0,
            y: 0
        } //returning an object
    },
    methods: {
        changeName(name) {
            this.name = name
        },
        toggleShowUsers(){
            this.showUser = !this.showUser
        },
        toggleFav(user){
            user.isFav = !user.isFav
        },
        handleEvent(e, argument) {
            console.log(e, e.type);
            if(argument){
                console.log(argument);
            }
        },
        handleMouseMove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }

    },
    computed: {
        filteredUsers(){
            return this.users.filter((item) => item.isFav )
        }
    }
})

app.mount('#app')

 const {createApp}=Vue

 createApp({
    data(){
        return{
            MinecraftTasks: [
                {
                    id: 1,
                    text: 'prendere 10 blocchi di legna',
                    done: false
                },
                {
                    id: 2,
                    text: 'prendere 4 blocchi di quarzo ',
                    done: false
                },
                {
                    id: 3,
                    text: 'craftare un cane',
                    done: false
                },
            ],
            lastId: 3,
        }
    }
 }).mount('#app')
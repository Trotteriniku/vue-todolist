 const {createApp}=Vue

 createApp({
    data(){
        return{
            MinecraftTasks: [
                // {
                //     id: 1,
                //     text: 'prendere 10 blocchi di legna',
                //     done: false
                // },
                // {
                //     id: 2,
                //     text: 'prendere 4 blocchi di quarzo ',
                //     done: false
                // },
                // {
                //     id: 3,
                //     text: 'craftare un cane',
                //     done: false
                // },
            ],
            lastId: 0,
            todoText: ''
        }
    },
    methods:{
        removeTask(i){
            console.log(i)
            this.MinecraftTasks.splice(this.MinecraftTasks[i], 1)
            
        },
        addTask(){
            this.lastId++;
            const newTask = {
                id: this.lastId,
                text: this.todoText,
                done: false
            }
            this.MinecraftTasks.unshift(newTask);
            this.todoText = '';
        },
        toggleDone(index) {
            this.MinecraftTasks[index].done = !this.MinecraftTasks[index].done
        },
    },
    mounted(){
        console.log(removeTask);
    }
 }).mount('#app')
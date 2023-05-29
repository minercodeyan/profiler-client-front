export default function (instance) {
    return {
        getAll() {
            return  instance.get('/listeners/settings')
                .then(response => {
                    return response.data
                })
        },
        create(option){
            return instance.post('/listeners/settings',option)
        },
        bind(listener,setting){
            return instance.post('/listeners/'+listener+'/settings/'+setting+'/bind')
        },
        unbind(listener,setting){
            return instance.post('/listeners/'+listener+'/settings/'+setting+'/unbind')
        }
    }
}
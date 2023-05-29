export default function (instance) {
    return {
         getAll() {
            return  instance.get('/listeners')
                .then(response => {
                    return response.data
                })
        },
        getById(id) {
            return  instance.get('/listeners/'+id)
                .then(response => {
                    return response.data
                })
        },
        delete(id) {
            return  instance.delete('/listeners/'+id)
                .then(response => {
                    return response.data
                })
        },
        deactivate(id){
             return instance.post('/listeners/deactivate/'+id)
        },
        activate(id){
            return instance.post('/listeners/activate/'+id)
        },
        create(listener){
             return instance.post('/listeners',listener)
        },
        createThread(name){
             return instance.post('/listeners/threads',{'name' : name})
        },
        bindThread(listener,thread){
             return instance.post('/listeners/'+listener+'/thread/'+thread+'/bind')
        }
    }
}
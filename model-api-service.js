import ApiService from "./src/framework/view/api-service.js";



const Method={
    GET:'GET',
    PUT:'PUT',
    POST:'POST',
    DELETE: 'DELETE'
}

export default class ModelApiService extends ApiService{
    get services(){
        return this._load({url:'api/services'}).then(ApiService.parseResponse);
    }
    get features(){
        return this._load({url:'api/features'}).then(ApiService.parseResponse);
    }
    async addAppointment(appointment){
        const response=await this._load({url:'api/appointments',method:Method.POST, body:JSON.stringify(appointment),headers:new Headers({'Content-Type':'application/json'})});
        return ApiService.parseResponse(response);
    }

   /* async addTask(task){
        const response=await this._load({url:'tasks',method:Method.POST, body:JSON.stringify(task),headers:new Headers({'Content-Type':'application/json'})});
        return ApiService.parseResponse(response);
    }

    async updateTask(task){
        //(`task id: ${task.id}`);
        const response = await this._load({
            url: `tasks/${task.id}`,
            method: Method.PUT,
            body: JSON.stringify(task),
            headers: new Headers({'Content-Type': 'application/json'}),
        });

        const parsedResponse=await ApiService.parseResponse(response);

        return parsedResponse;
    }

    async deleteTask(taskId){
        await this._load({
            url:`tasks/${taskId}`,
            method:Method.DELETE
        })
    }*/
}
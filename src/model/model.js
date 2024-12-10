// Model
// const Model = {
//     currentPage: 'home',
//     services: [
//         { name: 'Oil Change', description: 'Keep your engine running smoothly with our professional oil change service.', icon: 'fas fa-oil-can' },
//         { name: 'Brake Service', description: 'Ensure your safety with our top-notch brake inspection and repair service.', icon: 'fas fa-brake-disk' },
//         { name: 'Tire Rotation', description: 'Extend the life of your tires and improve vehicle performance with our tire rotation service.', icon: 'fas fa-tire' },
//         { name: 'Engine Diagnostics', description: 'Identify and resolve engine issues quickly with our advanced diagnostic tools.', icon: 'fas fa-car-battery' },
//         { name: 'A/C Service', description: 'Stay cool with our comprehensive air conditioning maintenance and repair service.', icon: 'fas fa-snowflake' },
//         { name: 'Transmission Service', description: 'Keep your vehicle shifting smoothly with our expert transmission service.', icon: 'fas fa-cogs' }
//     ],
//     features: [
//         { name: 'Expert Technicians', description: 'Our certified mechanics have years of experience.', icon: 'fas fa-user-cog' },
//         { name: 'Quality Parts', description: 'We use only high-quality, OEM-approved parts.', icon: 'fas fa-cog' },
//         { name: 'Fast Service', description: 'Quick turnaround without compromising on quality.', icon: 'fas fa-clock' },
//         { name: 'Warranty', description: 'All our repairs come with a comprehensive warranty.', icon: 'fas fa-shield-alt' }
//     ],
//     setCurrentPage(page) {
//         this.currentPage = page;
//     }
// };

import Observable from "../framework/obversable.js";


// export default Model

export default class Model extends Observable{
    #services=[];
    #features=[];
    #modelApiService=null;
    currentPage='home';
    #appointments=[];

    constructor({modelApiService}){
        super();
        this.#modelApiService=modelApiService;
        this.#modelApiService=modelApiService;

    }

    set services(value){
        this.#services=value;
    }
    get services(){
        return this.#services
    }

    set features(value){
        this.#features=value;
    }
    get features(){
        return this.#features
    }
    set appointments(value){
        this.#appointments=value;
    }
    get appointments(){
        return this.#appointments
    }
    async init(){
        try{
            const services=await this.#modelApiService.services;
            this.#services=services;
            const features=await this.#modelApiService.features;
            console.log(`Features`)
            this.#features=features;
        }catch(error){
            this.#services=[]
            this.#features=[]
        }
       // this._notify(UpdateType.INIT);
    }
    setCurrentPage(page) {
        this.currentPage = page;
    }
    async addAppointment(appointment){
        
        try {
            const createdTask=await this.#modelApiService.addAppointment(appointment);
            this.#appointments.push(appointments);
            this._notify(UserAction.ADD_TASK,createdTask);
            return createdTask;
        } catch (error) {
            console.error('Ошибка при добавлении задачи на сервер:', err);
            throw error;
        }
        const length=this.#appointments.push(newTask);
        //(`Iris: ${length}`)
        this._notifyObservers();
        return newTask;
    }


} 


//PAT: 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
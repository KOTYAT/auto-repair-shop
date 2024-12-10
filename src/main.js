import ModelApiService from "../model-api-service.js";
import Model from "./model/model.js";
import RepairShopPresenter from "./presenter/RepairShopPresenter.js";


// Initialize the app
const END_POINT="https://675569b011ce847c992a015a.mockapi.io/"
const model = new Model({modelApiService: new ModelApiService(END_POINT)})
const repairShopPresenter= new RepairShopPresenter({model});
repairShopPresenter.init();
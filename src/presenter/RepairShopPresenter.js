import contactTemplate from "../view/ContactTemplate.js";
import homeTemplate from "../view/HomeTemplate.js";
import Model from "../model/model.js";
import { render } from "../framework/render.js";
import servicesTemplate from "../view/ServicesTemplate.js";
import appointmentsTemplate from "../view/AppointmentTemplate.js";


// Controller
export default class RepairShopPresenter  {

    #model=null
    constructor({model}) {
        this.#model=model;
        this.#model.addObserver(this.#handleModelChange.bind(this));
      }
   async init() {
        await this.#model.init()
        this.handleNavigation();
        this.handleMobileNav();
    }
    async createAppointment(){
        const form=document.querySelector('#appointment-form');
        const formData=new FormData(form)
        formData.forEach((value, key) => {
            console.log(`${key}: ${value}`);
          });

        try{
        //await this.#model.addAppointment(formData);
        //document.querySelector('#add-task').value='';
        }catch(error){
          console.error("Error when creating the exercise",error)
        }
       }
    handleNavigation() {
        window.addEventListener('hashchange', () => {
            const page = window.location.hash.slice(1) || 'home';
            this.#model.setCurrentPage(page);
            switch(page) {
                case 'home':
                  render(page,homeTemplate,this.#model, ()=>{});
                  break;
                case 'services':
                    render(page,servicesTemplate,this.#model,()=>{})
                  break;
                case 'appointments':
                    render(page,appointmentsTemplate,this.#model,()=>{
                        this.createAppointment()
                        console.log("Mesias reign")
                    })
                  break;
                case 'contact':
                    render(page,contactTemplate,this.#model,()=>{})
                    break;
                default:
                    render(page,homeTemplate,this.#model,()=>{});
                  // code block
              }
            //View.render(page);
            console.log(`In listener: ${page} ${window.location.hash}`)
        });
        console.log(`In NavFunction: ${this.#model.currentPage}`)
        // Initial render
        render(this.#model.currentPage,homeTemplate, this.#model, ()=>{});
    }
    handleMobileNav() {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        burger.addEventListener('click', () => {
            // Toggle Nav
            nav.classList.toggle('nav-active');

            // Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });

            // Burger Animation
            burger.classList.toggle('toggle');
        });
    }
    #handleModelChange(){
        this.handleNavigation();
        this.handleMobileNav();
       }
};
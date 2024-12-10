import { createElement } from "../framework/render.js";
import Model from "../model/model.js";

export default function servicesTemplate(model, func) {
    const html= `
        <section class="container">
            <h2>Our Services</h2>
            <div class="services-grid">
                ${model.services.map(service => `
                    <div class="service-card">
                        <i class="${service.icon}"></i>
                        <h3>${service.name}</h3>
                        <p>${service.description}</p>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
    const element=createElement(html)
    return element;
}
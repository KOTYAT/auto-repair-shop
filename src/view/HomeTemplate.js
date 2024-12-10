import { createElement } from "../framework/render.js";
import Model from "../model/model.js";

export default function homeTemplate(model, func){
    const html= `<div>
            <section class="hero">
                <h1>Welcome to AutoFix Pro</h1>
                <p>Your trusted partner for all car repair needs</p>
                <a href="#services" class="btn">Explore Our Services</a>
            </section>
            <section class="container">
                <h2>Why Choose Us?</h2>
                <div class="features">
                    ${model.features.map(feature => `
                        <div class="feature-card">
                            <i class="${feature.icon}"></i>
                            <h3>${feature.name}</h3>
                            <p>${feature.description}</p>
                        </div>
                    `).join('')}
                </div>
            </section></div>
        `;
    const element=createElement(html)
    return element;

}

 
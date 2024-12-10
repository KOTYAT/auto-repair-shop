import { createElement } from "../framework/render.js";
import Model from "../model/model.js";

export default function appointmentsTemplate(model, func) {
    const html=`
        <section class="container">
            <h2>Book an Appointment</h2>
            <form class="appointment-form" id="appointment-form">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" required>
                </div>
                <div class="form-group">
                    <label for="service">Service:</label>
                    <select id="service" name="service" required>
                        <option value="">Select a service</option>
                        ${model.services.map(service => `
                            <option value="${service.name}">${service.name}</option>
                        `).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label for="date">Preferred Date:</label>
                    <input type="date" id="date" name="date" required>
                </div>
                <div class="form-group">
                    <label for="time">Preferred Time:</label>
                    <input type="time" id="time" name="time" required>
                </div>
                <button type="submit" class="btn">Book Appointment</button>
            </form>
        </section>
    `
    const element=createElement(html)
    element.addEventListener('submit', (evt)=>{
        evt.preventDefault();
        console.log("I need you more")
        func();
    });
    return element;
}



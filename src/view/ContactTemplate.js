import { createElement } from "../framework/render.js";


export default function contactTemplate(model, func) {
    const html= `
        <section class="container">
            <h2>Contact Us</h2>
            <div class="contact-container">
                <div class="contact-info">
                    <h3>Our Location</h3>
                    <p><i class="fas fa-map-marker-alt"></i>Shimdta Street 83</p>
                    <h3>Phone</h3>
                    <p><i class="fas fa-phone"></i> (123) 456-7890</p>
                    <h3>Email</h3>
                    <p><i class="fas fa-envelope"></i> info@autofixpro.com</p>
                    <h3>Business Hours</h3>
                    <p><i class="fas fa-clock"></i> Monday - Friday: 8am - 6pm</p>
                    <p><i class="fas fa-clock"></i> Saturday: 9am - 3pm</p>
                    <p><i class="fas fa-clock"></i> Sunday: Closed</p>
                </div>
                <form class="contact-form">
                    <h3>Send Us a Message</h3>
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="message">Message:</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit" class="btn">Send Message</button>
                </form>
            </div>
        </section>
    `;
    const element=createElement(html)
    return element;
}
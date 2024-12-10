
const RenderPosition = {
    BEFOREBEGIN: 'beforebegin',
    AFTERBEGIN: 'afterbegin',
    BEFOREEND: 'beforeend',
    AFTEREND: 'afterend',
  };

function updateActiveLink(page) {
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${page}`) {
            link.classList.add('active');
        }
    });
}

function createElement(template) {
    const newElement = document.createElement('div');
    newElement.innerHTML = template;
    return newElement.firstElementChild;
  }

function render(page,template, model,func) {
    // const app = document.getElementById('app');
    // app.innerHTML = template(model,func);
    // updateActiveLink(page);
    const app = document.getElementById('app');
    app.innerHTML=""
    app.insertAdjacentElement(RenderPosition.BEFOREEND,template(model,func));
    updateActiveLink(page);
}

export {render, updateActiveLink, createElement}
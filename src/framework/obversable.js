export default class Observable {


    #observers = new Set();
 
 
    addObserver(observer) {
      this.#observers.add(observer);
    }
 
 
    removeObserver(observer) {
      this.#observers.delete(observer);
    }
 
 
    _notify(event, payload) {
      //(`notified`)
      this.#observers.forEach((observer) => observer(event, payload));
    }
  }
 
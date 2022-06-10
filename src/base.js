class Base {
    /**
     * jsqt Element
     * @param {string} id - element id
     */
    constructor(id){
        this.element = document.getElementById(id);
    }

    /** Checks if gui element exists */
    hasElement = () => {
        return this.element != null;
    }

    /**
     * Sets a new value tho the gui element.
     * @param {null} value 
     */
    setValue = (value) => {
        if(this.hasElement()){
            this.element.value = value;
        }
    }

    setClassName = (className) => {
        if(this.hasElement()){
            this.element.className = className;
        }
    }

    /**
     * A wrapper to addEventListener
     * @param {string} event - a event name
     * @param {*} callback - a function to be called
     */
    on(event, callback) {
        if(this.hasElement()){
            this.element.addEventListener(event, callback);
        }
    }

}

export {
    Base
}

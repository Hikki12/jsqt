class Base {
    /**
     * 
     * @param {string} id - element id
     */
    constructor(id){
        this.element = document.getElementById(id);
    }

    hasElement = () => {
        return this.element != null;
    }

    setValue = (value) => {
        if(this.hasElement()){
            this.element.value = value;
        }
    }

    on(event, callback) {
        if(this.hasElement()){
            this.element.addEventListener(event, callback);
        }
    }

}

export {
    Base
}

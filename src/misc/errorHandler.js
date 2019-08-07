class ErrorHandler extends Error{

    constructor(message) {
        super(message)
        this.message = message
    }

    get getMessage(){
        return this.message;
    }
}

module.exports = ErrorHandler
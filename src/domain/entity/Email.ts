export default class Email {
    private value: String;

    constructor (email: string) {
        if(!String(email).toLowerCase().match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)) {
            throw new Error("Invalid email");
        }
        this.value = email;
    }

    getValue () {
        return this.value;
    }
}
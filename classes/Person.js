class Person {
    constructor(name) {
        this.name = name
    }

    setDateOfBirth(year) {
        this.year = year
    }
    
    getDateOfBirth() {
        return this.date
    }

    age() {
        if (!this.date) return console.log('Date has not been set...');

        const today = new Date();
        const birth = new Date(this.date);

        return today.getFullYear() - birth.getFullYear();
    }

    getName() {
        return this.name
    }
    description() {

    }
}

module.exports = Person
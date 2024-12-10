const Person = require('./Person')

class Student extends Person {
    constructor(name) {
        super(name)
        this.id = null;
        this.grades = []
    }

    setId(id) {
        this.id = id
    }

    getId() {
        return this.id
    }

    addStudentGrade(grade) {
        this.grades.push(grade);
    }

    getGrades() {
        return this.grades
    }

    getAverageGrade() {
        if (this.grades.length === 0) return -1;

        const total = this.grades.reduce((sum, grade) => sum + grade, 0);
        return total / this.grades.length;
    }

    description() {

    }
}

module.exports = Student
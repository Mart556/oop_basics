class Course {
    constructor(name) {
        this.name = name
        this.grades = []
    }
    
    getGrades() {
        return this.grades
    }

    addStudentGrade(student, grade) {
        this.grades.push({student, grade});
        student.addStudentGrade(grade)
    }

    getAverageGrade() {
        if (this.grades.length === 0) return -1;

        let averageGrades = []
        this.grades.forEach((stud) => {
            averageGrades.push(stud.grade)
        })



        const total = averageGrades.reduce((sum, grade) => sum + grade, 0);

        return total / averageGrades.length;
    }

    description() {

    }
}

module.exports = Course
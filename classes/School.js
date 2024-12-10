class School {
    constructor(name) {
        this.name = name
        this.students = []
        this.courses = []
    }

    addStudent(student) {
        if (this.students.some(existingStudent => existingStudent.id === student.id)) {
            return
        }

        student.setId(this.students.length + 1)

        this.students.push(student)
    }

    addStudentGrade(student, course, grade) {
        course.addStudentGrade(student, grade)
    }

    addCourse(course) {
        // TODO Ainult [he saab lisada]
        this.courses.push(course)
    }

    getStudents() {
        return this.students
    }

    getCourses() {
        return this.courses
    }

    getStudentsOrderedByAverageGrade() {
        let studentsByAverage = []

        this.students.forEach(student => {
            studentsByAverage.push({
                student: student,
                averageGrade: student.getAverageGrade()
            });
        })

        studentsByAverage.sort((a, b) => b.averageGrade - a.averageGrade)

        return studentsByAverage.map(item => item.student);
    }
}

module.exports = School
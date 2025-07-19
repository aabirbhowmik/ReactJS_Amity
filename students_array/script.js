class StudentManager {
    constructor(capacity = 10) {
        // The array to store student names.
        this.students = [];
        // The maximum number of students allowed in the array.
        this.capacity = capacity;
        console.log(`Student Manager initialized with a capacity of ${this.capacity} students.`);
    }

    
    addStudent(studentName) {
        // Check if the array has reached its maximum allowed size.
        if (this.students.length >= this.capacity) {
            return `Cannot add ${studentName}. The student list is full (max ${this.capacity} students).`;
        }
        // Add the student name to the end of the array.
        this.students.push(studentName);
        return `${studentName} has been added to the list. Current students: ${this.students.join(', ')}.`;
    }

    removeStudent() {
        // Check if the array is empty.
        if (this.students.length === 0) {
            return "Cannot remove student. The student list is empty.";
        }
        // Remove the first element from the array and store it.
        const removedStudent = this.students.shift();
        return `${removedStudent} has been removed from the list. Current students: ${this.students.join(', ')}.`;
    }

    
    searchStudent(studentName) {
        // Check if the student name exists in the array.
        if (this.students.includes(studentName)) {
            return `${studentName} was found in the student list!`;
        } else {
            return `${studentName} was not found in the student list.`;
        }
    }

   
    sortStudents() {
        // Sort the array of student names alphabetically.
        this.students.sort();
        return `Student list has been sorted alphabetically. Current order: ${this.students.join(', ')}.`;
    }

    getStudents() {
        return this.students;
    }
    getCurrentSize() {
        return this.students.length;
    }
    getCapacity() {
        return this.capacity;
    }
}

// --- Example Usage ---

// Creating a new StudentManager instance with a capacity of 5 for demonstration.
// You can change the number here, e.g., new StudentManager(10) for 10 students.
const myStudentList = new StudentManager(5);

console.log("\n--- Adding Students ---");
console.log(myStudentList.addStudent("Dhoni"));
console.log(myStudentList.addStudent("Virat"));
console.log(myStudentList.addStudent("Rohit"));
console.log(myStudentList.addStudent("Jadeja"));
console.log(myStudentList.addStudent("Pandya"));

// Try to add one more student to test capacity limit
console.log(myStudentList.addStudent("Bumrah")); // This should show the capacity limit message

console.log("\n--- Current Students ---");
console.log("Current students:", myStudentList.getStudents());
console.log("Current size:", myStudentList.getCurrentSize());

console.log("\n--- Searching for Students ---");
console.log(myStudentList.searchStudent("Dhoni"));
console.log(myStudentList.searchStudent("Jadeja"));

console.log("\n--- Sorting Students ---");
console.log(myStudentList.sortStudents());
console.log("Students after sorting:", myStudentList.getStudents());

console.log("\n--- Removing Students ---");
console.log(myStudentList.removeStudent()); 
console.log(myStudentList.removeStudent()); 
console.log("Students after removal:", myStudentList.getStudents());

// Try to remove more students until empty
console.log(myStudentList.removeStudent());
console.log(myStudentList.removeStudent());
console.log(myStudentList.removeStudent());
console.log(myStudentList.removeStudent()); // This should show the empty list message

console.log("\n--- Final State ---");
console.log("Current students:", myStudentList.getStudents());
console.log("Current size:", myStudentList.getCurrentSize());

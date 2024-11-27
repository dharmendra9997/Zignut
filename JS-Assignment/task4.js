class University {
    constructor(name) {
        this.name = name; 
        this.departments = []; 
    }

    addDepartment(department) {
        this.departments.push(department);
        console.log(`${department} added.`);
    }

    removeDepartment(department) {
        this.departments = this.departments.filter(dept => dept !== department);
        console.log(`${department} removed.`);
    }

    displayDepartments() {
        console.log(`Departments at ${this.name}:`, this.departments.join(", ") || "None");
    }
}

const clg = new University("GEC Bhavnagar");

clg.addDepartment("Computer");
clg.addDepartment("IT");
clg.addDepartment("Civil");
clg.addDepartment("ICT");
clg.displayDepartments();

clg.removeDepartment("Civil");
clg.displayDepartments();

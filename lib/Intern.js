// Import Employee class
const Employee = require('./Employee');
//The other three classes will extend Employee.
class Intern extends Employee {
    
    //school
    constructor(name, id, email, school) {
        // Get methods from Employee class
        super(name, id, email);
        this.school = school;
    }    

    //getSchool()
    getSchool() {
        return this.school;

    };

    //getRole()—overridden to return 'Intern'
    getRole() {
        return "Intern";
    }
};

//exports Intern
module.exports = Intern;

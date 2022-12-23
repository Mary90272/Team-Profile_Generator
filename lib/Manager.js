// Import Employee class
const Employee = require('./Employee');
//The other three classes will extend Employee.
class Manager extends Employee {
    
    //officeNumber
    constructor(name, id, email, officeNumber) {
        // Get methods from Employee class
        super(name, id, email);
        this.officeNumber = officeNumber;
    }    

//getRole()—overridden to return 'Manager'
    getRole() {
        return "Manager";
    }
//getOfficeNumber 
    getOfficeNumber() {
        return this.officeNumber;
    }
}

//exports Manager
module.exports = Manager;

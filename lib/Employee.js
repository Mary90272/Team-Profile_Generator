
class Employee {
    //name,id,email
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

//getName() 
getName() {
    return this.name;
}

//getId() 
getId() {
    return this.id;

}

//getEmail() 
getEmail() {
    return this.email;

}

//getRole()—returns 'Employee'
getRole() {
    // Returns "Employee"
    return "Employee";
}
};

//exports Employee
module.exports = Employee;


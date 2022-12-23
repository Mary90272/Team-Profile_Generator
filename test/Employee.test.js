// Import Employee class
const Employee = require("../lib/Employee");

describe("Employee", () => {
  
  describe("Employee object instantiation", () => {
    it("Creates an object with name, id, and email properties", () => {
      const employee = new Employee("some name", 3, "example@gmail.com");

      expect(employee).toBeInstanceOf(Employee);
      expect(employee.name).toEqual("some name");
      expect(employee.id).toEqual(3);
      expect(employee.email).toEqual("example@gmail.com");
    });
  });

  
  describe("getName", () => {
    it("Should return the object's name property", () => {

      const employee = new Employee("some name", 3, "example@gmail.com");

      expect(employee.getName()).toEqual("some name");
    });
  });

 
  describe("getId", () => {
    it("Should return the object's id property", () => {
      const employee = new Employee("some name", 3, "example@gmail.com");

      expect(employee.getId()).toEqual(3);
    });
  });


  describe("getEmail", () => {
    it("Should return the object's email property", () => {
      const employee = new Employee("some name", 3, "example@gmail.com");

      expect(employee.getEmail()).toEqual("example@gmail.com");
    });
  });


  describe("getRole", () => {
    it("Should return the string 'Employee'", () => {
      const employee = new Employee("some name", 3, "example@gmail.com");

      expect(employee.getRole()).toEqual("Employee");
    });
  });
});
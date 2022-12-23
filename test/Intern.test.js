// Import Employee class
const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

describe("Intern", () => {
  
  describe("Intern object instantiation", () => {
    it("Creates an object with name, id,email and school properties", () => {
        const intern = new Intern("maria", 1, "example@gmail.com", "aerospace university");
    
       
        expect(intern).toBeInstanceOf(Intern);
        expect(intern.name).toEqual("maria");
        expect(intern.id).toEqual(1);
        expect(intern.email).toEqual("example@gmail.com");
        //add a school check
        expect(intern.school).toEqual("aerospace university");
    });
  });

  
  describe("getName", () => {
    it("Should return the object's name property", () => {
        const intern = new Intern("maria", 1, "example@gmail.com", "aerospace university");
        expect(intern.getName()).toEqual("maria");
    });
  });

 
  describe("getId", () => {
    it("Should return the object's id property", () => {
        const intern = new Intern("maria", 1, "example@gmail.com", "aerospace university");
        expect(intern.getId()).toEqual(1);
    });
  });


  describe("getEmail", () => {
    it("Should return the object's email property", () => {
        const intern = new Intern("maria", 1, "example@gmail.com", "aerospace university");
        expect(intern.getEmail()).toEqual("example@gmail.com");
    });
  });

  //add getSchool function test
  describe("getSchool", () => {
    it("Should return the object's school property", () => {
        const intern = new Intern("maria", 1, "example@gmail.com", "aerospace university");
        expect(intern.getSchool()).toEqual("aerospace university");
    });
  });

  describe("getRole", () => {
    it("Should return the string 'Intern'", () => {
        const intern = new Intern("maria", 1, "example@gmail.com", "aerospace university");
        expect(intern.getRole()).toEqual("Intern");
    });
  });
});
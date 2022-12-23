// Import Employee class
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");


describe("Engineer", () => {
  
    describe("Engineer object instantiation", () => {
      it("Creates an object with name, id, email and github properties", () => {
        const engineer = new Engineer("mary", 2, "example@gmail.com", "sometext");

        expect(engineer).toBeInstanceOf(Engineer);
        expect(engineer.name).toEqual("mary");
        expect(engineer.id).toEqual(2);
        expect(engineer.email).toEqual("example@gmail.com");
        //add a github check
        expect(engineer.github).toEqual("sometext");
      });
    });
  

    describe("getName", () => {
      it("Should return the object's name property", () => {
        const engineer = new Engineer("mary", 2, "example@gmail.com", "sometext");

        expect(engineer.getName()).toEqual("mary");
      });
    });
  
   
    describe("getId", () => {
      it("Should return the object's id property", () => {
        const engineer = new Engineer("mary", 2, "example@gmail.com", "sometext");

        expect(engineer.getId()).toEqual(2);
      });
    });
  
  
    describe("getEmail", () => {
      it("Should return the object's email property", () => {
        const engineer = new Engineer("mary", 2, "example@gmail.com", "sometext");

        expect(engineer.getEmail()).toEqual("example@gmail.com");
      });
    });

//add getGithub function test
    describe("getGithub", () => {
        it("Should return the object's github property", () => {
          const engineer = new Engineer("mary", 2, "example@gmail.com", "sometext");

          expect(engineer.getGithub()).toEqual("sometext");
        });
      });

    describe("getRole", () => {
      it("Should return the string 'Engineer'", () => {
        const engineer = new Engineer("mary", 2, "example@gmail.com", "sometext");

        expect(engineer.getRole()).toEqual("Engineer");
      });
    });
  });
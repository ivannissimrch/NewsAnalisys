import { processData }  from "../src/client/js/processData";
  
describe("Testing processData function to be defined", () => {
     
    test("Testing the processData() function", () => {
       
       expect(processData).toBeDefined();
    })
});
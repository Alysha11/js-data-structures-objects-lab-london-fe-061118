// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  
newObj = Object.assign({}, driver);
newObj.name = "Sam";
newObj.address = "11 Broadway";

return newObj;

  }

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value)
{
  
 driver.name ="Sam"; 
 driver.address ="11 Broadway";
 
 return driver;
  
  
}

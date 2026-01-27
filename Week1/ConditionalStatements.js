let browserName ="Safari"

if(browserName == "Safari")  //Condition
{
    console.log("\nLaunching Safari.......")   //Displayed when condition is True
}
else
{
    console.log("\nLaunching Default Browser......")  //Displayed when condition is False
}

let testType ="Sanity"

switch(testType)       //Key used for switch here is "testType"
{
case "Smoke":                            //Different Values or Cases ie., "smoke" ,etc...
    console.log("\nRunning Smoke Tests.....")
    break

case "Sanity":
    console.log("\nRunning Sanity Tests....")
    break

case "Regression":
    console.log("\nRunning Regression Tests......")
    break  

default:
    console.log("Running Default Smoketests.....")  //If none matches prints Default condition      
}




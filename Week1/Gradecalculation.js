

let score = 61


switch(true)       //Key used for switch here is expression "true"
{
case (score >=90):                            // Cases with diff conditions
    console.log("\nGrade A")
    break

case (score >=80 && score <=89):
    console.log("\nGrade B")
    break

case (score>=70 && score<=79):
    console.log("\nGrade C")
    break 

case (60<=score <=69):
    console.log("\nGrade D")
    break     
case (score<60):
    console.log("\nGrade F")
    break
default:
    console.log("\nInvalid score")    
}





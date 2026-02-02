
//Example 1

let s = "Hello World" //Given

let s1= s.split(" ")  //Splitting the words using space

let last= s1[s1.length-1] //Finding the last word

console.log(last.length) //Printing the length of last word

//Example 2

// Creating a function for finding length of last word in given sentence
function lastlen(s2)
{
let trimmed = s2.trim()    //deleting leading and trailing spaces using trim()

let sp=trimmed.split(" ")

let ls= sp[sp.length-1]

return ls.length

}

let word = "  fly me to   the moon "

console.log(lastlen(word))   // Callingthe function

//Example 3

// Creating a function for Checking is strings are Anagram
function IsAnagram(a,b){
let c = a.trim().toLowerCase().split('').sort().join('')
let d = b.trim().toLowerCase().split('').sort().join('')



if(c===d){
return console.log("The words are Anagram")

}
else{
  return  console.log("Not a Anagram")
}
}

let string1 =" hello "
let string2 =" world "

IsAnagram(string1,string2)








let text ="MalayalaM"


//splitting Text in characters and reversing and concatnating

let revtext = text.split('').reverse().join('') 


console.log("Original Text:\t" +text)
console.log("Reversed Text:\t" +revtext)

//Checking whether Palindrome or not using Conditional stmt

if(text===revtext)
{
    console.log("The Word is a Palindrome")
}
else
    {
      console.log(" The Word is not a Palindrome")
}

const account_Id = 444
let accountEmail ="manish@microsoft.com"
var accountPassword= "112233"
accountcity = "Bihar"
let accountState;

//account_Id =2 not allowed


accountEmail = "manish@hdfc.com"
accountPassword= "2233"
accountcity = "Bengaluru" // not good way


// perefer not use varbecause of issue in block scope and functional scope

console.log("account_Id");

console.table ([account_Id,accountEmail,accountPassword,accountcity])


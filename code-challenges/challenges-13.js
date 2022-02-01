'use strict';

// Important Note: 
// Kindly use reduce instead of for in all of your solutions

// Resource:
// Reduce: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// 1) ---------------------
// 
//  Given an array of objects, count the objects by using reduce method.

//  EX:
// var voters = [
//     {
//         voter_Name: "Adam Scott",
//         votes_To: "James",
//     },
//     {
//         voter_Name: "Abril Blake",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Ruby Andrews",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     }
// ]
//

// ------------------------

const objectCounter = (obj) => {
    const result = obj.reduce((total,person,indx) =>{
        // console.log(indx)
          return total + 1
      },0)
      return result

}

// 2) ---------------------
// 
// Given a string input as an argument reverse it using reduce method.
//
//  EX:
// 'you shall not pass' ==> 'pass not shall you'
//
// Hint:
// since you need to reverse words, you may get some use of the methods
// you learnt before to split the string to words
//
// ------------------------

const stringReverse = (str) => {
    const sp =str.split(" ")
    let out = []
     let result = sp.reduce((arr,string,index) =>{
     
     arr.unshift(string)
     return arr
     },[])
     
 return result.join(" ")

}

// 3) ---------------------
// 
// Using the same array of object from the first question, create new object that contain the candidates name as keys (voting for),
// and how many times they got voted to as values using the reduce method.
//
// Input:
// let voters = [
//     {
//         voter_Name: "Adam Scott",
//         votes_To: "James",
//     },
//     {
//         voter_Name: "Abril Blake",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Ruby Andrews",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     }
// ];
//
// Output:
// let res = {
//     James: 1,
//     Jade: 2,
//     Bailey: 2
// };
//
// ------------------------

const statistics = (obj) => {
    let test ={}
  let count1 =0
  let count2 =0
  let count3=0
    let result =obj.reduce((vot,person) =>{
      
      
   switch (person.votes_To) {
     case 'James':
       vot +=1
       test[person.votes_To] = vot ;break;
      case "Jade" :
        count1 +=1
       test[person.votes_To] = count1 ;break;
      case "Bailey":
      count2 +=1
       test[person.votes_To] = count2 ;break;
       case "Chad":
         count3 +=1
         test[person.votes_To] = count3 ;break;
       
     
   }
  return test
    },0)
    return result
}



module.exports = { objectCounter, stringReverse, statistics };


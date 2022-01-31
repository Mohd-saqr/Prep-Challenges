'use strict';
// Important Note: 
// Kindly use filter instead of for in all of your solutions

// Resource:
// Filter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// 1) ---------------------
// 
// Given an array of values use filter to extract odd values.
//  
// EX:
// [20, 54, 89, 41, 2, 31, 111, 15, 0, 31, 200] ==> [89, 41, 31, 111, 31]
// 
// ------------------------

const oddFiltration = (arr) => {
    let oddNum = arr.filter(odd =>{
        if(odd%2!=0){
            return odd
        }
    })
    return oddNum
}

// 2) ---------------------
// 
// Given data of candidates return the candidates CVs that have more than 4 years of experience 
// and works as JS developer 

// EX:
// var cvs = [
//     {
//         firstName: "Jason",
//         LastName: "James",
//         yearsOfExperience: 20,
//         tech: "JS"
//     },
//     {
//         firstName: "Shira",
//         LastName: null,
//         yearsOfExperience: 5,
//         tech: ".Net"
//     },
//     {
//         firstName: "Dmitri",
//         LastName: "Akkerman",
//         yearsOfExperience: 1,
//         tech: "Python"
//     },
//     {
//         firstName: "Isabella",
//         LastName: null,
//         yearsOfExperience: 4,
//         tech: "Java"
//     }
// ]
//
//   ===>
//
// [
//     {
//         fullName: "Jason James",
//         tech: "JS"
//     }
// ]

//  Note that:
//  1- Full name is first name + last name
//  2- If one of the names is null dont add it to the full name
// ------------------------

const cvsFiltration = (arr) => {
    let candidates =[]
    let candidatesObj={}
    let ex = arr.filter(obj =>{
        if(obj.yearsOfExperience >4 && obj.tech == "JS"){
            return obj 
        }
    })
    let objcan = ex.filter(person =>{
    candidatesObj[`fullName`] =`${person.firstName} ${person.LastName}`
    candidatesObj[`tech`] = person.tech
      candidates.push(candidatesObj)
    })
   
   return candidates

}

// 3) ---------------------
//
// Given an array of words filter the names that contains one of the vowels (a, e, i, o, u)

// EX:
// ['car', 'boy', 'spy', 'building', 'why', 'dry' ] ==> ['spy', 'why', 'dry']
// 
// ------------------------

const vowelsFiltration = (arr) => {
    let regex = /(a|e|i|o|u)/gi
    let out = arr.filter(st =>{
      if(st.match(regex)==null){
        return st
      }
    })
    return out
} 

// 4) ---------------------
//
// An employer wants to compare between his employees skills, write a function that will extract the differences 
// between the employees skills.

// EX:
// first_Employee = [C, C#, Java, Angular, PHP]
// first_Employee = [C#, .Net, JavaScript, React, Angular]
// ==>
// result = [C, Java, PHP, .Net, JavaScript, React]
// Hint:
// - the 'include' method can help you, read about it.
// ------------------------

const skillComparison = (arr1, arr2) => {
    let out =[]
   
    arr1.filter(el =>{
       if (arr2.includes(el)==false){
            out.push(el)
       }
    })
    arr2.filter(e2 =>{
      if(arr1.includes(e2) == false){
        out.push(e2)
      }
    })
    
    return out
}


module.exports = { oddFiltration, cvsFiltration, vowelsFiltration, skillComparison };


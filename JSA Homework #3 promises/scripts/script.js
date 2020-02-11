// // Task 1

// testNumber = num1 => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (num1 > 10) {
//                 resolve('Success!')
//             } else {
//                 reject('ERROR: The number is below 10!')
//             }
//         }, 2000);
//     })
// }

// testNumber(15)
//     .then(success => console.log(success))
//     .catch(err => console.log(err))
//     .finally(() => console.log(`Everything finished in ${Math.round(performance.now()) / 1000}s`));

// // Task 2 - 1

// let arrayOfWords = ['button', 'erased', 'c#', 'darwins game', 'array'];

// const stringChecker = array => {
//     for (const word of array) {
//         if (typeof word !== 'string') {
//             return false;
//         }
//     }
//     return true;
// }

// const changeAllToCaps = array => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (stringChecker(array)) {
//                 let i = 0;
//                 for (const word of array) {
//                     array[i] = word.toUpperCase();
//                     i++;
//                 }
//                 resolve('Success! The array has been converted to upper case!');
//             } else {
//                 reject(`ERROR: There is something else other than a string in the array!`);
//             }
//         }, 2000);
//     })
// }

// changeAllToCaps(arrayOfWords)
//     .then(success => {
//         console.log(success, arrayOfWords);
//     })
//     .catch(err => console.log(err))
//     .finally(() => console.log(`Everything finished in ${Math.round(performance.now()) / 1000}s`));

// // Task 2 - 2

// let arrayOfWords = ['button', 'erased', 'c#', 'darwins game', 'array'];


// const arraySort = array => {
//     let newArr = array.sort((a, b) => a.localeCompare(b));
//     return newArr;
// }

// const arrayChecker = array => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (array.length <= 1) {
//                 reject(`ERROR: There are not enough words to sort the array!`);
//             } else {
//                 arraySort(array);
//                 resolve(`Success! The array has been sorted!`);
//             }
//         }, 2000);
//     })
// }

// arrayChecker(arrayOfWords)
//     .then(success => console.log(success, arrayOfWords))
//     .catch(err => console.log(err))
//     .finally(() => console.log(`Everything finished in ${Math.round(performance.now()) / 1000}s`));

// // Task 2 - 3

// let arrayOfWords = ['button', 'erased', 'c#', 'darwins game', 'array'];

// const stringChecker = array => {
//     for (const word of array) {
//         if (typeof word !== 'string') {
//             return false;
//         }
//     }
//     return true;
// }

// const changeAllToCaps = array => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (stringChecker(array)) {
//                 let i = 0;
//                 for (const word of array) {
//                     array[i] = word.toUpperCase();
//                     i++;
//                 }
//                 resolve('Success! The array has been converted to upper case!');
//             } else {
//                 reject(`ERROR: There is something else other than a string in the array!`)
//             }
//         }, 2000);
//     })
// }

// const arraySort = array => {
//     let newArr = array.sort((a, b) => a.localeCompare(b));
//     return newArr;
// }

// const arrayChecker = array => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (array.length <= 1) {
//                 reject(`ERROR: There are not enough words to sort the array!`);
//             } else {
//                 arraySort(array);
//                 resolve(`Success! The array has been sorted!`);
//             }
//         }, 2000);
//     })
// }

// changeAllToCaps(arrayOfWords)
//     .then(success => {
//         console.log(success);
//         return arrayChecker(arrayOfWords);
//     })
//     .then(success => {
//         console.log(success);
//         console.log(arrayOfWords);
//     })
//     .catch(err => console.log(err))
//     .finally(() => console.log(`Everything finished in ${Math.round(performance.now()) / 1000}s`));


// BONUS    

let arrayOfWords = ['button', 'erased', 'c#', 'darwins game', 'array'];

const stringChecker = array => {
    for (const word of array) {
        if (typeof word !== 'string') {
            return false;
        }
    }
    return true;
}

const changeAllToCaps = array => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (stringChecker(array)) {
                let i = 0;
                for (const word of array) {
                    array[i] = word.toUpperCase();
                    i++;
                }
                resolve('Success! The array has been converted to upper case!');
            } else {
                reject(`ERROR: There is something else other than a string in the array!`);
            }
        }, 2000);
    })
}

const arraySort = array => {
    let newArr = array.sort((a,b) => a.localeCompare(b));
    return newArr;
}

const arrayChecker = array => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (array.length <= 1) {
                reject(`ERROR: There are not enough words to sort the array!`)
            } else {
                arraySort(array);
                resolve(`Success! The array has been sorted!`);
            }
        }, 2000);
    })
}

const asyncFunc = async array =>  {
    try {
        let changeCaps = await changeAllToCaps(array);
        console.log(changeCaps);
        let checkedArray = await arrayChecker(array);
        console.log(checkedArray);
        console.log(array);
        console.log(`Everything finished in ${Math.round(performance.now()) / 1000}s`);
    }  catch(err) {
        console.log(err);
    }
}

asyncFunc(arrayOfWords);
for (i = 1; i <= 5; i++) {
    let a = prompt('Enter Your Name')
    let b = prompt('Enter Your Age')
    const users = {
        user: i,
        name: a,
        age: b
    }
    for (const key in users) {
        console.log(`${key} - ${users[key]}`);
    }
}

// const menu =  receipt()
// for (const key in menu) {
//     for (const key2 in menu[key]) {
//         let b = menu[key][key2]
//         b.priceAdd = function(){
//         return b.price
//         }
//         console.log(b.priceAdd());
//     }
// }

// const menu = receipt()

// let product = '';
// let price = 0;
// let deliveryPrice = 9000;
 
// for (const [productName, productInfo] of Object.entries(receipt())) {
//     product = product + `${productName} ${productInfo.info}, `
//     price = price + productInfo.price + deliveryPrice;
// }
 
// console.log(`Have you ordered ${product}| total cost ${price} with delivery (9000)`);

// function receipt() {
//     const arrayReceipt = [
//         {
//             'Lavash': {
//                 info: 'Big Cheese',
//                 price: 15000
//             },  
//             'Hot-dog': {
//                 info: 'mini',
//                 price: 8500
//             },  
//             'Cola': {
//                 info: '1.5 L',
//                 price: 9000
//             }
//         }, 
//         {
//             'Milk': {
//                 info: '1 L',
//                 price: 8500
//             },
//             'Sugar': {
//                 info: '1 kg',
//                 price: 7000
//             }
//         }, 
//         {
//             'Cola': {
//                 info: '1 L',
//                 price: 6500
//             },
//             'Fanta': {
//                 info: '1.5 L',
//                 price: 9000
//             },
//             'Lipton': {
//                 info: '1.2 L',
//                 price: 5000
//             }, 
//             'Nestle': {
//                 info: '10 L',
//                 price: 8500
//             }
//         }
//     ]
//     const count = Math.floor(Math.random() * arrayReceipt.length)
//     return arrayReceipt[count]
// }

// for (i = 1; i <= 5; i++) {
//     let a = prompt('Enter Your Name')
//     let b = prompt('Enter Your Age')
//     const users = {
//         [`user ${i}`]: {
//             name: a,
//             age: b
//         }
//     }
//     console.log(users);
// }
// const users = {}
// for (i = 1; i <= 5; i++) {
//     let a = prompt('Enter Your Name')
//     let b = prompt('Enter Your Age')
//     users[`user ${i}`] = {
//         name: a,
//         age: b
//     }
// }
// console.log(users);







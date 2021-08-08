 /*_________________________________ Answer Of First Problem _______________________________________*/


function seerToMon(seer) {
    let mon = seer / 40;
    return mon;
}

const total = seerToMon(200);
console.log(total);


/*_________________________________ Answer Of Second Problem _______________________________________*/


function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
    
    const perShirtPrice = 100;
    const perPantPrice = 200;
    const perShoePrice = 500;

    // totalSale Calculation

    const totalShirtQuantity = shirtQuantity * perShirtPrice;
    const totalPantQuantity = pantQuantity * perPantPrice;
    const totalShoeQuantity = shoeQuantity * perShoePrice;

    const totalSales = totalShirtQuantity + totalPantQuantity + totalShoeQuantity;
    return totalSales;
}

const totalSaleAmount = totalSales(4, 3, 2);
console.log(totalSaleAmount);


/*_________________________________ Answer Of Third Problem ________________________________________*/


function deliveryCost(product) {

     if(product <= 100) {
        const under100 = product * 100;

        return under100;
     }

     else if(product <= 200) {

         const first100 = 100 * 100;
         const restProduct = product - 100;
         const under200 = restProduct * 80;
         const totalPrice = first100 + under200;

        return totalPrice;
     }
 
     else{

        const first100 = 100 * 100;
        const first200 = 100 * 80;
        const restProduct = product - 200;
        const upto200 = restProduct * 50;
        const totalPrice = first100 + first200 + upto200;

        return totalPrice;
     }

}

console.log(deliveryCost(250))


/*_________________________________ Answer Of Fourth Problem _______________________________________*/


function perfectFriend(friends) {

    let friend = '';

    for (let i = 0; i < friends.length; i++) {
        const element = friends[i];
        if ( element.length == 5) {
            friend = element;
            break;
        }      
    }
    return friend;
}

const friends = ['ahad', 'gonesh', 'labib', 'heroalom', 'dewan'];
console.log(perfectFriend(friends));
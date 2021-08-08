 /*_________________________________ Answer Of First Problem _______________________________________*/


function seerToMon(seer) {

    //1st error for string
    if (typeof seer != 'number') {
        return 'Give a number please.';
    }

    // 2nd error for less than 0
    else if (seer <= 0) {
        return 'Give a positive number please.';
    }

    // theory area starts from here

    let mon = seer / 40;
    return mon;
}

const total = seerToMon(200);
console.log(total);


/*_________________________________ Answer Of Second Problem _______________________________________*/


function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
    
    //error for string type input
    if (typeof shirtQuantity != 'number' || typeof pantQuantity != 'number' || typeof shoeQuantity != 'number') {
        return 'Order as number please.';
    }

    //error for less than 0
    else if (shirtQuantity <= 0 || pantQuantity <= 0 || shoeQuantity <= 0) {
        return 'You have to oder at least 1 item of every product.';
    }
    
    // theory area starts from here

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

    //error for string type input
    if (typeof product != 'number') {
        return 'Order as a number please.';
    }

    // error for less than 0 
    else if (product <= 0) {
        return 'Order at least 1 product please.';
    }

    // theory area starts from here

    const priceFor100 = 100;
    const priceFor200 = 80;
    const priceUpto200 = 50;

     if(product <= 100) {
        const under100 = product * priceFor100;

        return under100;
     }

    //  Conditionals

     else if(product <= 200) {

         const first100 = 100 * priceFor100;
         const restProduct = product - 100;
         const under200 = restProduct * priceFor200;
         const totalPrice = first100 + under200;

        return totalPrice;
     }
 
     else{

        const first100 = 100 * priceFor100;
        const first200 = 100 * priceFor200;
        const restProduct = product - 200;
        const upto200 = restProduct * priceUpto200;
        const totalPrice = first100 + first200 + upto200;

        return totalPrice;
     }

}
const totalCost = deliveryCost(250);
console.log(totalCost)


/*_________________________________ Answer Of Fourth Problem _______________________________________*/


function perfectFriend(friends) {

    //error for an objest as input
    if (typeof friends != 'object') {
        return 'Make sure you are passing an array of friends.';
    }

    //error for a string as input
    else if (typeof friends == 'string') {
        return 'Make sure you are not giving a string.';
    }

    // theory area starts from here
    
    let friend = '';

    // Conditionals

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
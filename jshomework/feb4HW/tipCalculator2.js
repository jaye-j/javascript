function tipAmount(billAmount, service){
    if (service == 'good'){
        let tipTotal = billAmount * 0.20;
        return console.log(tipTotal + billAmount);
    }
    if (service == 'fair'){
        let tipTotal = billAmount * 0.15;
        return console.log(tipTotal + billAmount);
    }
    if (service == 'bad'){
        let tipTotal = billAmount * 0.10;
        return console.log(tipTotal + billAmount);
    }
};

console.log('The tip total is: ')
tipAmount(20, 'fair');
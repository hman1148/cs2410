const filter = (data, predicate) => {
    //create an array holding total invalid transactions 
    const copyDataArray = [];
    // loop through each object in the transactions and grab the transaction ammount attribute
    for (let i = 0; i < data.length; i++) {
        // check if the value is an invalid transaction
        if (predicate(data[i])) {
            copyDataArray.push(data[i]);
        }
    }
    return copyDataArray;
}

const pairIf = (data1, data2, predicate) => {
    //create variable to hold total duplicate customers 
    let pairArray = [];

    for (let i = 0; i < data1.length; i++) {
        for (let j = 0; j < data2.length; j++) {
            if (predicate(data1[i], data2[j])) {
                pairArray.push([data1[i], data2[j]]);
            }
        }
    }
    return pairArray;
}

const findLast = (data, predicate) => {

    for (let i = data.length - 1; i >= 0; i--) {
        
        if (predicate(data[i])) {
            return data[i];
        } 
    }
    return null;
}

const reduce = (list, redeucer, basecase) => {
    let acc = basecase;

    for (let i = 0; i < list.length; i++) {
        acc = redeucer(list[i], acc);
    }

    return acc;
}

const map = (data, call) => {
    const mapArray = [];

    for (let i = 0; i < data.length; i++) {
        mapArray.push(call(data[i]));
    }
    return mapArray;
}

const haveAtLeast = (transactions, customers) => {

    const transactionsOver200 = filter(transactions, val => {return val.amount >= 200});
    
    const pairTransactionWithCustomer = pairIf(transactionsOver200, customers, (transaction, customer) => {
            if (transaction.customerId === customer.id) {
                    return true;
            } else {
                return false;
            }
     });
     
      reduce(pairTransactionWithCustomer, (customer, basecase) => {
            
            if (pairTransactionWithCustomer.includes(customer)) {
                pairTransactionWithCustomer.pop(customer);
                return basecase + 1;
            } else {
                return basecase + 0;
            }
            
     }, 0)

     const names = map(pairTransactionWithCustomer, pair => {
            return `${pair[1].firstName} ${pair[1].lastName}`
     });

     console.log("Customers with transactions over $200: ") 
     console.log(pairTransactionWithCustomer);

     console.log("Names of customers with transactiosn over $200: ")
     console.log(names);
}

const recentTransactionOver = findLast(transactions, val => {return val.amount >= 200}); 

const invalidTransactions = filter(transactions, (val) => {

    const validProducts = ["FIG_JAM","FIG_JELLY", "SPICY_FIG_JAM", "ORANGE_FIG_JELLY"];
    
    if (val.amount <= 0 || val.amount === null || val.amount === undefined || !validProducts.includes(val.product)) {
        return true; 
    } else {
        return false;
    }
});

const duplicateCustomers = pairIf(customers, customers, (val1, val2) => {
    if (val1.emailAddress === val2.emailAddress && val1.id !== val2.id) {
        return true;
    } else {
        return false;
    }
});

const transactionsSizes = reduce(transactions, (value, basecase) => {

    if (value.amount < 25) {
         basecase.small += 1;
    } else if (value.amount >= 25 && value.amount <= 75) {
        basecase.medium += 1;
    } else if (value.amount > 75) {
        basecase.large += 1;
    } 
    return basecase;

}, {small: 0, medium: 0, large: 0});

console.log(`Number of invalid transactions: ${invalidTransactions.length}`);
console.log(`Number of duplicate customers: ${duplicateCustomers.length / 2}`);
console.log(`Most recetn transaction over $200: $${recentTransactionOver.amount}`);
console.log(`Number of small transactions: ${transactionsSizes.small}`);
console.log(`Number of medium transactions: ${transactionsSizes.medium}`);
console.log(`Number of large transactions: ${transactionsSizes.large}`);
haveAtLeast(transactions, customers, 0);

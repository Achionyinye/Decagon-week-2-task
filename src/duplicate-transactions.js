// function findDuplicateTransactions(transactions) {}

// export default findDuplicateTransactions;


function findDuplicatetransactions(transactions) {

  // checking if transaction array is empty 
  if(transactions === null || transactions === ""){
      // if transcation array is empty then throw an error exception
      throw new Error("Invalid input");
  }

  // use the spread operator to create a new array and store in trasactionArray
  let transactionArray= [...transactions];

  // checking if transaction array is of type object
  if(typeof transactionArray !== "object"){
      // if transaction array is not an object then throw a new error exception
      throw new Error ("Invalid Input");
  }

  // sorting transaction array based on transaction time which was converted to a date object
  transactionArray.sort((a, b) => new Date(a.time) - new Date(b.time));
  
  let duplicates = []
  let match = []
  let src, dst;

  // while the sorted transaction array's length is greater than 1 continue loop
  while(transactionArray.length > 1){
  
    src = 0
    dst = 1
    match = [src]

    // the date object of transaction time minus
    // the date object of transaction time of src 
    // the src is the base transaction time or lowest transaction time
    while ((new Date(transactionArray[dst].time) - new Date(transactionArray[src].time)) <= 60000 && src < transactionArray.length -1){
      
      // if the difference is less than 60 seconds then the src and dst are the same
      if(compare_equal(transactionArray[src], transactionArray[dst])){
        // push to match array 
          match.push(dst)
          src = dst
      }

      // increment dst
      dst += 1

      // if dst is greater than the length of the transaction array then break the loop **'
      if (dst === transactionArray.length){
        break
      }
    }

    
    // if match array length is greater than 1 then there are duplicates
    if (match.length > 1){
      let temp = []

      // for each element in match array (as long as the match length is graeter than 1)
      while(match.length){

          // push the element to temp array
        let item = transactionArray.splice(match.pop(), 1)

        // push the temp array to duplicates array
        temp.unshift(item[0])
      }

      //
      duplicates.push(temp)
      match = []
    } else{
      transactionArray.shift()
    }

    if (transactionArray.length == 1){
      break;
    }  
    
  }
  return duplicates
}


const compare_equal = (t1,t2) => {
  if (t1.sourceAccount === t2.sourceAccount && t1.targetAccount === t2.targetAccount && t1.amount === t2.amount && t1.category === t2.category){
    return true;
  }else{
    return false;
  }
}


export default findDuplicatetransactions;
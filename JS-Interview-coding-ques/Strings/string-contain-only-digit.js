

const stringContainOnlyDigit = str =>{
    // const regex = /^\d+$/;
    const regex = /^[0-9]+$/;
    const result  = regex.test(str);
    console.log(result)

}

stringContainOnlyDigit('123')
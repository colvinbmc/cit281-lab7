class CustomError extends Error {
    constructor(args){
        super(args);
        this.message = "Custom Error";
    }
    throwGenericError(){
        throw new Error("Generic Error");
    }
    throwCustomError(){
        throw new CustomError().message;
    }
} 
//initialize the CustomError object
const myError = new CustomError();

//try...catch...finally block with Generic Error
console.log("Force generic error");
try{
    console.log("Generic error try block");
    myError.throwGenericError();
} catch {
    console.log("Generic error catch block");
    console.log(myError.throwGenericError());
} finally {
    console.log("Generic error finally block");
}

//try...catch...finally block with Custom Error
console.log("Force custom error");
try{
    console.log("Custom error try block");
} catch{
    console.log("Custom error catch block");
    console.log(myError.throwCustomError());
} finally {
    console.log("Custom error finally block");
}
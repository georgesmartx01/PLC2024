const prompt=require("prompt-sync")({sigint:true}); 

const Error_enumobj = {
	A_BIT_DIFFERENT: "A_BIT_DIFFERENT", 
    INFINITY: "INFINITY", 
    ZERO: "ZERO", 
    VERY_DIFFERENT: "VERY_DIFFERENT"
}

const Result_enumobj = {
	FP_ROUNDING: "FP_ROUNDING",
	FP_OVERFLOW: "FP_OVERFLOW",
	FP_UNDERFLOW: "FP_UNDERFLOW",
	INT_OVERFLOW: "INT_OVERFLOW"
}

function error2Result(err){
    switch (err) {
	case Error_enumobj.A_BIT_DIFFERENT:
	 return Result_enumobj.FP_ROUNDING;
	break;
	case Error_enumobj.INFINITY:
	    return Result_enumobj.FP_OVERFLOW;
	break;
	case Error_enumobj.ZERO:
	    return Result_enumobj.FP_UNDERFLOW;
	break;
	case Error_enumobj.VERY_DIFFERENT:
	    return Result_enumobj.INT_OVERFLOW;
	break;
	default:
		return 'Invalid Error value';
}

}

console.log('Error list: ', Object.values(Error_enumobj));
var validArg = false;
while(!validArg){
    var input = prompt("Input: ");
    let result = error2Result(input);
    if (Object.values(Result_enumobj).includes(result)){
        validArg = true;
		console.log(input + " results in " + error2Result(input));
    }
    else{
        console.log(result);
    }
}

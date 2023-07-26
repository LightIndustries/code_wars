function addBinary(a,b) {

    let sum = a + b;
    let reverseBinaryString = "";
    let binaryString = "";

    while (sum != 0) {

        if (sum % 2 > 0) {
            reverseBinaryString += '1';
        } else {
            reverseBinaryString += '0';
        }

        sum = Math.floor(sum / 2);
    }

    for (i = reverseBinaryString.length - 1; i >= 0; i--) {
        binaryString += reverseBinaryString[i]
    }
    
    return binaryString;


}

let a = 7;
let b = 7;
console.log(addBinary(a, b))
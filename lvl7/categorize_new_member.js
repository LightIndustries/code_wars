function openOrSenior(data){

    let classifications = [];

    data.forEach(function(member) {
        if(member[0] >= 55 && member[0] > 7) {
            classifications.push("Senior")
        } else {
            classifications.push("Open")
        }
    })

    return classifications;
  }

let data = [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
console.log(openOrSenior(data))
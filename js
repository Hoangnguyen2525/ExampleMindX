function allLongestStrings(inputArray) {
    var newarr = [];
    if( inputArray.length == 1){
      return inputArray;
    }
    var longestWord = inputArray.sort(function(a, b) {
     return b.length - a.length;
    });
    var lengthOfLongestWord = longestWord[0].length;//returns length of longest word
    for(var i = 0; i < longestWord.length; i++){
     if(longestWord[i].length == lengthOfLongestWord){
       newarr.push(longestWord[i]);
     }
    }
    return newarr;
    }
    var mindx = allLongestStrings(['BINH', 'HUNG','PHUOC','CAO','KHANH']);
    console.log(mindx);


 function alternatingSums(inputArray) {
    alternatingSums([60, 40, 55, 75, 64])
            var sumsArr;  var sumTeam1 = 0;
            var sumTeam2 = 0;
            for (var i = 0; i < inputArray.length; i++) {
                if (i%2 == 0) {
                  sumTeam1 = sumTeam1 + inputArray[i]
                } else {
                  sumTeam2 = sumTeam2 + inputArray[i]
                }
            }
            sumsArr.push(sumTeam1);
            sumsArr.push(sumTeam2);
            return sumsArr
          }

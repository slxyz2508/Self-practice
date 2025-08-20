function getFreqOfWords(sentence){
    if (sentence == null || undefined){
        return undefined
    }
    newsentence = sentence.toLowerCase().split(' ')
    answer = {}
    for (let index = 0; index < newsentence.length; index++) {
        const element = newsentence[index];
        answer[element] = answer[element] ? answer[element] + 1 : 1
    }
    return (answer);
   
   
}
console.log(getFreqOfWords('Today is present and present is your gift'))
console.log(getFreqOfWords('Do you best just do it'))
console.log(getFreqOfWords(null))
console.log(getFreqOfWords(undefined))
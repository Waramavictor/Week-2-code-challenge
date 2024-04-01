let words = 'The Quick Brown Fox';
    
function change() {
    let changedWords = '';
    for (let i = 0; i < words.length; i++){
        if([1,2,3,6,5,7,8,11,12,14,13,17,18].includes(i)){
            changedWords += words[i].toUpperCase();
        }
        else{
            changedWords += words[i].toLowerCase();
        }
        return changedWords
    }
}
    console.log(changedWords);

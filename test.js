/**
 * Created by Lenovo on 2017/5/19.
 */
/*function test()
{
    return  '';
}*/


var format = function(word,count){
    return word + ' '+ count;
}

var group = function(wordArray){
    return wordArray.reduce((array,word) =>{
       let entry = array.find((e) => e.word===word);
    if(entry) {
        entry.count++;
    }
    else{
        array.push({word:word,count:1});
    }
    return array;
},[]);
};
var split=function (words) {
    return words.split(/\s+/);
};
var sort=function (groupedWords) {
    groupedWords.sort((x, y)=> y.count -  x.count);
};
function test (words) {
    if(words !== ''){
        let  wordArray = split(words);
        let groupedWords = group(wordArray);
        sort(groupedWords);
        return groupedWords.map((e)=>format(e.word, e.count)).join('\r\n');
    }
    return ''
}

module.exports=test;

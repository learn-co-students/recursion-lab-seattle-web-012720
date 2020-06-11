// Code your solution here!

function printString(str){
    console.log(str[0])
    if (str.length > 1){
        let newStr = str.substring(1, str.length)
        printString(newStr)
    }
    return true
}

function reverseString(str){
    if (str.length > 1){
        return str[str.length-1]+reverseString(str.substring(0,str.length-1))
    }
    return str[0]
}

function isPalindrome(word){
    if (word.length>1){
        return word[0]===word[word.length-1] && isPalindrome(word.substring(1, word.length-1))
    }
    return true
}

function addUpTo(arr, i){
    if (i>0){
        return arr[i]+addUpTo(arr, i-1) 
    }
    return arr[0]
}

  

function maxOf(arr){
    if (arr.length>1){
        return Math.max(arr.pop(), maxOf(arr))
    }
    return arr[0]
}

function includesNumber(arr, el){
    if (arr.length>1){
        return includesNumber(arr.slice(0,arr.length-1), el) || el === arr[arr.length-1]
    }
    return el === arr[0]
}

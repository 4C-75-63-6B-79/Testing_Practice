export default function reverseString(word) {
    let reverseWord = '';
    if(!word) {
        return 'true';
    }
    for(let i=0; i<word.length; i+=1) {
        reverseWord = word.charAt(i) + reverseWord;
    }
    return reverseWord;
}
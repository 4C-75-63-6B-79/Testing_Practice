export default function ceaserCipher(string, shift = 0) {
    if(!(typeof string === 'string')) {
        return 'provide a string argument';
    }
    if(!Number.isInteger(shift)) {
        return 'provide a whole integer value as shift factor';
    }
    if(shift === 0) {
        return string;
    }
    let resultString = '';
    for(let i=0; i<string.length; i += 1) {
        if( string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122 ) {
            resultString += String.fromCharCode( 97 + ( string.charCodeAt(i) + shift - 97 ) % 26 );
        } else if( string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90 ) {
            resultString += String.fromCharCode( 65 + ( string.charCodeAt(i) + shift - 65 ) % 26 );
        } else {
            resultString += string.charAt(i);
        }
    }
    return resultString;
}
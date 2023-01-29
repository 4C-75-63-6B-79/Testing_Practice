export default function analyzeArray(array) {
    if(!Array.isArray(array)) {
        return 'provide an array';
    }

    if(array.some(ele => !Number.isInteger(ele))){
        return 'provide an array with all elements as numbers';
    }

    if(array.length === 0) {
        return {
            average: null,
            min: null,
            max: null,
            length: 0,
        };
    }

    return {
        average: array.reduce((sum, ele) => sum + ele, 0) / array.length,
        min: array.sort((a, b) => a - b)[0],
        max: array.sort((a, b) => a - b)[array.length-1],
        length: array.length
    }
}
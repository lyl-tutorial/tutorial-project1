const s = 'Happy New Year'

function replaceSpace1(s) {
    return s.split(' ').join('%20')
}

function replaceSpace2(s) {
    return s.replace(/ /g, '%20')
}

function replaceSpacePlus(s) {
    let arr = s.split('')

    let strLens = s.length;
    let spaceCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ' ') {
            spaceCount++
        }
    }

    arr.length += spaceCount * 2

    for (let i = strLens - 1, j = arr.length - 1; i >= 0; i--, j--) {
        if (arr[i] === ' ') {
            arr[j] = '0';
            arr[j - 1] = '2'
            arr[j - 2] = '%'
            j -= 2
        } else {
            arr[j] = arr[i]
        }
    }

    return arr.join('')
}

console.log(replaceSpacePlus(s))
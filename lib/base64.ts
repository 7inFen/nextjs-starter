"use strict";

/*\
|*|
|*|  Base64 / binary data / UTF-8 strings utilities (#4)
|*|
|*|  https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding
|*|
\*/

export const b64EncodeUnicode =  (str = '') => {
    // encode
    // first we use encodeURIComponent to get percent-encoded UTF-8,
    // then we convert the percent encodings into raw bytes which
    // can be fed into btoa.
    // return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
    //     function toSolidBytes(match, p1) {
    //         return String.fromCharCode('0x' + p1);
    // }));
    return ''
}

export const b64DecodeUnicode = (str = '') => {
    // decode
    // console.log(Buffer)
    // Going backwards: from bytestream, to percent-encoding, to original string.
    // return decodeURIComponent(atob(str).split('').map(function(c) {
    //     return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    // }).join(''));
    return ''
}
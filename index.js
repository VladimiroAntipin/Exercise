import { encoded, translations } from './data.js';

console.log("Let's rock")
console.log(encoded, translations);

function translateEncodedObjects(encoded, translations) {
    return encoded.map(obj => {
        const translatedObj = { ...obj };
        for (const key in translatedObj) {
            if (translations.hasOwnProperty(translatedObj[key])) {
                translatedObj[key] = translations[translatedObj[key]];
            }
            if (translatedObj[key] === null) {
                delete translatedObj[key];
            }
        }
        return translatedObj;
    });
}

const decoded = translateEncodedObjects(encoded, translations);

console.log(decoded);


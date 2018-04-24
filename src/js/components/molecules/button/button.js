import {
    icon,logo
} from './../index.js';
/**
 * 
 * @param {string} text Texto inside button tag 
 * @returns {string}
 */
function button(text, className=""){
    return (
        `
        <button class"${className}"=> 
        ${icon('')}
        ${text} 
        </button>
        `
    );
}

export default button;
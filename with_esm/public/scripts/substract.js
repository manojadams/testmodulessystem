import { error } from './error.js';
export const substract = function(a, b) {
    if (a < b) {
        error('expecting a to be greater than b');
    }
    return a - b;
} 
define(['error'],function(error) {
    var substract = function(a, b) {
        if (a < b) {
            error('expecting a to be greater than b');
        }
        return a - b;
    } 
    return substract;
});
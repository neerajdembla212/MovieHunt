
export function generateID(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

// Following function can use any date transformation logic using native js.
export function formatDate(dateString) {
    return new Date(dateString).toDateString();
    // return new Intl.DateTimeFormat('en-GB').format(dateString);
}
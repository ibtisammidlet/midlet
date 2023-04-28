function interval(ms, funcName) {
    $(funcName).each(function() {
        // here set interval to all functions with the name "helloworld" and set the interval to 5000ms
        setInterval(this, ms);
    });
}


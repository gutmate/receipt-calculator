function calculator(start) {
    var count = start;
    var log = [];
    
    return {
        count: function (num) {
            num = num || 0;
            count = count + num;
            log.push(count);
            return count;
        },
        log: function () {
            return log;
        }
    }
}

exports.response = function () {

    var getArgs = arguments[0];
    var postArgs = arguments[1];
    console.warn(postArgs, 'postArgs');
    console.warn(getArgs, 'getArgs');

    var ret = {};
    if (getArgs.date_count == 1) {
        ret.total_count = 5;
    }

    return {
        status: 0,
        msg: 'ok',
        data: ret
    };
};
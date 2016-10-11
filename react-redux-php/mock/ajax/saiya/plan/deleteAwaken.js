
exports.response = function () {

    var getArgs = arguments[0];
    var postArgs = arguments[1];
    console.warn(postArgs, 'postArgs');
    console.warn(getArgs, 'getArgs');

    return {
        status: 1,
        msg: 'ok',
        data: null
    };
};

exports.response = function () {

    var getArgs = arguments[0];
    var postArgs = arguments[1];
    console.warn(postArgs, 'postArgs');
    console.warn(getArgs, 'getArgs');

    return {
        status: 0,
        msg: 'ok',
        data: 'http://xiaodu.baidu.com/img/pic?pic_id=25932459'
    }
};
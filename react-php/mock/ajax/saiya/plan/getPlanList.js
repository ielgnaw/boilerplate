exports.response = function () {

    var getArgs = arguments[0];
    var postArgs = arguments[1];
    console.warn(postArgs, 'postArgs');
    console.warn(getArgs, 'getArgs');

    return {
        status: 0,
        msg: 'ok',
        data: {
            end: getArgs.page == 2 ? 1 : 0,
            plan_list: [
                {
                    id: '111',
                    name: 'xxxxxx循环训练1',
                    src_by: 'by 今日健身',
                    total_users: 9999999,
                    banner_path: 'http://boscdn.bpc.baidu.com/mms-res/ielgnaw/1111.png',
                    join: getArgs.page == 2 ? 1 : 0,
                    detail: 1 // 是否有计划详情页，1有，0无
                },
                {
                    id: '222',
                    name: 'xxxxxx循环训练2',
                    src_by: 'by 今日健身',
                    total_users: 9999999,
                    banner_path: 'http://boscdn.bpc.baidu.com/mms-res/ielgnaw/1111.png',
                    join: 0,
                    detail: 1 // 是否有计划详情页，1有，0无
                },
                {
                    id: '333',
                    name: 'xxxxxx循环训练3',
                    src_by: 'by 今日健身',
                    total_users: 9999999,
                    banner_path: 'http://boscdn.bpc.baidu.com/mms-res/ielgnaw/1111.png',
                    join: 0,
                    detail: 1 // 是否有计划详情页，1有，0无
                },
                {
                    id: '444',
                    name: 'xxxxxx循环训练4',
                    src_by: 'by 今日健身',
                    total_users: 9999999,
                    banner_path: 'http://boscdn.bpc.baidu.com/mms-res/ielgnaw/1111.png',
                    join: 0
                },
                {
                    id: '555',
                    name: 'xxxxxx循环训练5',
                    src_by: 'by 今日健身',
                    total_users: 9999999,
                    banner_path: 'http://boscdn.bpc.baidu.com/mms-res/ielgnaw/1111.png',
                    join: 0
                },
                {
                    id: '666',
                    name: 'xxxxxx循环训练6',
                    src_by: 'by 今日健身',
                    total_users: 9999999,
                    banner_path: 'http://boscdn.bpc.baidu.com/mms-res/ielgnaw/1111.png',
                    join: 0
                },
                {
                    id: '777',
                    name: 'xxxxxx循环训练7',
                    src_by: 'by 今日健身',
                    total_users: 9999999,
                    banner_path: 'http://boscdn.bpc.baidu.com/mms-res/ielgnaw/1111.png',
                    join: 0
                },
                {
                    id: '888',
                    name: 'xxxxxx循环训练8',
                    src_by: 'by 今日健身',
                    total_users: 9999999,
                    banner_path: 'http://boscdn.bpc.baidu.com/mms-res/ielgnaw/1111.png',
                    join: 0
                },
                {
                    id: '999',
                    name: 'xxxxxx循环训练9',
                    src_by: 'by 今日健身',
                    total_users: 9999999,
                    banner_path: 'http://boscdn.bpc.baidu.com/mms-res/ielgnaw/1111.png',
                    join: 0
                },
                {
                    id: '000',
                    name: 'xxxxxx循环训练10',
                    src_by: 'by 今日健身',
                    total_users: 9999999,
                    banner_path: 'http://boscdn.bpc.baidu.com/mms-res/ielgnaw/1111.png',
                    join: 0
                }
            ]
        }
    };
};

exports.response = function () {

    var getArgs = arguments[0];
    var postArgs = arguments[1];
    console.warn(postArgs, 'postArgs');
    console.warn(getArgs, 'getArgs');

    return {
        status: 0,
        msg: 'ok',
        'data': {
            'total_count': 186,
            'time': 1470910763,
            'plan_list': [
                {
                    'name': '日常健康计划',
                    'work_list': [
                        {
                            'name': '每天喝8杯水',
                            'clock': 1
                        },
                        {
                            'name': '每餐必有蔬菜每餐必有蔬菜每餐必有蔬菜',
                            'clock': 1
                        },
                        {
                            'name': '午餐后占理活散步30分钟',
                            'clock': 1
                        }
                    ]
                },
                {
                    'name': '日常健康计划1',
                    'work_list': [
                        {
                            'name': '每天喝8杯水1',
                            'clock': 1
                        },
                        {
                            'name': '每餐必有蔬菜每餐必有蔬菜每餐必有蔬菜1',
                            'clock': 1
                        },
                        {
                            'name': '午餐后占理活散步30分钟1',
                            'clock': 1
                        }
                    ]
                },
                {
                    'name': '日常健康计划2',
                    'work_list': [
                        {
                            'name': '每天喝8杯水2',
                            'clock': 1
                        },
                        {
                            'name': '每餐必有蔬菜每餐必有蔬菜每餐必有蔬菜2',
                            'clock': 1
                        },
                        {
                            'name': '午餐后占理活散步30分钟2',
                            'clock': 1
                        }
                    ]
                }
            ]
        }
    };
};
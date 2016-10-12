/**
 * @file 入口
 * @author ielgnaw(wuji0223@gmail.com)
 */

import React from 'react';
import {render} from 'react-dom';

require('./main.styl');

render(
    <div>
        <ul>
            <li>11</li>
            <li>22</li>
            <li>33</li>
        </ul>
        <span className="ccc"></span>
        <img src="https://www.baidu.com/img/baidu_jgylogo3.gif" />
    </div>,
    document.getElementById('root')
);

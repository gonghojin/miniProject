import React from 'react';
import {Button, Input} from 'antd';

import './TodoContents.css';
import 'antd/dist/antd.css';

const TodoContents = ({key, index, content, onDeleteOne}) => {
    return (
        <div className="TodoContents">
            <Input className='input' value={content} readOnly />
            <Button type="primary" onClick={() => onDeleteOne(index)}>[X]</Button>
        </div>
    );
};

export default TodoContents;

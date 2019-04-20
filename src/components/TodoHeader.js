import React from 'react';
import PropTypes from 'prop-types';
import { Input, Button} from 'antd';

import './TodoHeader.css';

const TodoHeader = ({onCreate, onChange, value}) => {
    return (
        <div className="TodoHeader">
            <Input name="content" value={value}  placeholder="할일 입력하세요!!"  onChange={onChange}/>
            <Button type="danger" onClick={onCreate}>입력</Button>
        </div>
    );
};

TodoHeader.prototype = {
    onCreate: PropTypes.func,
    onChange: PropTypes.func,
};

TodoHeader.defaultProps = {
    onCreate: () => console.warn('onCreate not defined'),
    onChange: (e) => console.warn('onCreate not defined'),
};
export default TodoHeader;

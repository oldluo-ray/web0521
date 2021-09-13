import React, { Component } from 'react'
import PropTypes from 'prop-types'
class List extends Component {
  render() {
    // props校验: 给公共组件的使用者,提供更加清晰的错误信息
    return (
      <div>
        <ul>
          {this.props.list.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>
    )
  }
}
// 给List组件添加静态属性propTypes
List.propTypes = {
  list: PropTypes.array.isRequired,
}
// props默认值
List.defaultProps = {
  list: [{ name: '测试' }, { name: '测试' }],
}

export default List

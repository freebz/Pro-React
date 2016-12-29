// 예제 3-8. SearchBar 컴포넌트

import React, { Component, PropTypes } from 'react';

class SearchBar extends Component {
    render(){
	return <input type="search" placeholder="search"
	      value={this.props.filterText} />
    }
}
// 새로운 propTypes 요건을 추가해야 한다.
SearchBar.propTypes = {
    filterText: PropTypes.string.isRequired
}

export default SearchBar

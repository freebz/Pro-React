// 예제 3-10. 로컬 함수 만들기

import React, { Component, PropTypes, render } from 'react';
import SearchBar from './SearchBar';
import ContactList from './ContactList';

// 주 컴포넌트이며 SearchBar와 ContactList를 랜더링
class ContactsApp extends Component {
    constructor(){
	super();
	this.state={
	    filterText: ''
	};
    }

    handleUserInput(searchTerm){
	this.setState({filterText:searchTerm})
    }
    
    render(){
	return(
   	    <div>
		<SearchBar filterText={this.state.filterText}
	              onUserInput={this.handleUserInput.bind(this)} />
		<ContactList contacts={this.props.contacts}
	              filterText={this.state.filterText}/>
	    </div>
	)
    }
}
ContactsApp.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object)
}

class ContactItem extends Component {
    render() {
	return <li>{this.props.name} - {this.props.email}</li>
    }
}
ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
}

let contacts = [
    { name: "Cassio Zen", email: "cassiozen@gamil.com" },
    { name: "Dan Abramov", email: "gaearon@somewhere.com" },
    { name: "Pete Hunt", email: "floydophone@somewhere.com" },
    { name: "Paul O'Shannessy", email: "zpao@somewhere.com" },
    { name: "Ryan Florence", email: "rpflorence@somewhere.com" },
    { name: "Sebastian Markbage", email: "sebmarkbage@here.com" },
]

render(<ContactsApp contacts={contacts} />, document.getElementById('root'));

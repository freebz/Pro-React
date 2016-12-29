// 예제 3-7. 업데이트된 상태 저장 ContactsApp 컴포넌트

import React, { Component, PropTypes, render } from 'react';
import SearchBar from './SearchBar';
//import ContactList from './ContactList';

// 주 컴포넌트이며 SearchBar와 ContactList를 랜더링
class ContactsApp extends Component {
    constructor(){
	super();
	this.state={
	    filterText: ''
	};
    }
    render(){
	return(
   	    <div>
		<SearchBar filterText={this.state.filterText} />
		<ContactList contacts={this.props.contacts}
	              filterText={this.state.filterText}/>
	    </div>
	)
    }
}
ContactsApp.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object)
}

class ContactList extends Component {
    render(){
	return(
	    <ul>
		{this.props.contacts.map(
		    (contact) => <ContactItem key={contact.email}
		                              name={contact.name}
		                              email={contact.email} />
		)}
	    </ul>
	)
    }
}
ContactList.propTypes = {
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

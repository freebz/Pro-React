// 예제 3-6. ContactsApp 코드

import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

// 주 컴포넌트이며 SearchBar와 ContactList를 랜더링
class ContactsApp extends Component {
    render(){
	return(
   	    <div>
		<SearchBar />
		<ContactList contacts={this.props.contacts} />
	    </div>
	)
    }
}
ContactsApp.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object)
}

class SearchBar extends Component {
    render(){
	return <input type="search" placeholder="search" />
    }
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

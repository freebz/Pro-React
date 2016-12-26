// 예제 2-3. 칸반 앱: 마크다운 랜더링

import React from 'react';
import KanbanBoard from './KanbanBoard';

let cardsList = [
    {
	id: 1,
	title: "Read the Book",
	description: "I should read the **whole** book",
	status: "in-progress",
	tasks: []
    },
    {
	id: 2,
	title: "Write some code",
	description: "Code along with the samples in the book. The complete source can be found at [github](https://github.com/pro-react)",
	status: "todo",
	tasks: [
	    {
		id: 1,
		name: "ContactList Example",
		done: true
	    },
	    {
		id: 2,
		name: "Kanban Example",
		done: false
	    },
	    {
		id: 3,
		name: "My own experiments",
		done: false
	    }
	]
    },
];

React.render(<KanbanBoard cards={cardsList} />, document.getElementById('root'));

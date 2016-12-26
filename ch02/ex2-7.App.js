// 예제 2-7. 칸반 앱: 인라인 스타일링을 이용한 카드 색상 지정

import React from 'react';
import KanbanBoard from './KanbanBoard';

let cardsList = [
    {
	id: 1,
	title: "Read the Book",
	description: "I should read the book",
	color: '#BD8D31',
	status: "in-progress",
	tasks: []
    },
    {
	id: 2,
	title: "Write some code",
	description: "Code along with the samples in the book. The complete source can be found at [github](https://github.com/pro-react)",
	color: '#3A7E28',
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

const initialState = {
	topics: [{
		label: 'ReactJS',
		range: 2 // Server will populate range after it loops through content
	},
	{
		label: 'NodeJS',
		range: 5
	},
	{
		label: 'Design',
		range: 9
	}],
	sites: [{
		label: 'YouTube',
		range: 5
	},
	{
		label: 'Medium',
		range: 3
	},
	{
		label: 'StackOverflow',
		range: 4
	}],
	timeSpent: [{ 
		day: 'Monday',
		time: 60 // should I store time like this?
	},
	{
		day: 'Tuesday',
		time: 20
	},
	{
		day: 'Wednesday',
		time: 42
	},
	{
		day: 'Thursday',
		time: 14
	}],
	content: [{
		topic: 'ReactJS',
		link: 'http://www.google.com'
	},
	{
		topic: 'NodeJS',
		link: 'http://www.npmjs.com'
	}]
}

export default function reducer(state = initialState, action) {
	return state;
}
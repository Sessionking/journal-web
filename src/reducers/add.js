export default function plus(state = {count: 0}, action) {
	switch (action.type) {
		case 'add':
			const {count} = action
			return {...state, count}
		default:
			return state
	}
}

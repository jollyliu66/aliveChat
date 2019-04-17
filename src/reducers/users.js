import { createReducer } from 'redux-create-reducer'
import * as actionTypes from '../constants/chatActionTypes'

const initialState = {
	byIds: {
		bot: {
			id: 'bot',
			name: 'Jimmy',
			avatarUrl:
				'http://www.clker.com/cliparts/Q/3/f/L/3/n/cartoon-robot-md.png',
		},
	},
	ownId: null,
	currentAgent: 'bot',
}

export default createReducer(initialState, {
	[actionTypes.NEW_USER](state, action) {
		return {
			...state,
			currentAgent: action.payload.id,
			byIds: {
				...state.byIds,
				[action.payload.id]: action.payload,
			},
		}
	},
	[actionTypes.OWN_DATA_RECEIVED](state, action) {
		return {
			...state,
			ownId: action.payload.id,
			byIds: {
				...state.byIds,
				[action.payload.id]: {
					...action.payload,
					name: 'Client',
				},
			},
		}
	},
})

export const getUsers = state => state.users.byIds
export const getOwnId = state => state.users.ownId
export const getCurrentAgent = state => state.users.byIds[state.users.currentAgent]

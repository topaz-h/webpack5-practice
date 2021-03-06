import * as actionTypes from '@/store/action-types';
import { CounterState } from '@/models';

const initialState: CounterState = { number: 0 };

export default function (state: CounterState = initialState, action: any): CounterState {
    switch (action.type) {
        case actionTypes.ADD:
            return { ...state, number: state.number + 1 };
        case actionTypes.MINUS:
            return { ...state, number: state.number + 1 };
        default:
            return state;

    }
};
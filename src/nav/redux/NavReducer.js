
import * as NavActions from './NavActions';


const initialState = {
    message: ''
}

export function NavReducer(state = initialState, action) {
    switch (action.type) {
        case NavActions.SELECT_NAVBAR_ITEM:
            return Object.assign({}, state, {
                message: action.type
            });
        default:
            return state;
    }
}

export default NavReducer;

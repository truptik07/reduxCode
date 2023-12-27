import { legacy_createStore } from "redux";

const reduce = (state = {name:'abc',age:12}, action) => {
    switch (action.type) {
        case 'Icre':
            return {...state,age:state.age+1};

        case 'Decr':
            return {...state,age:state.age-1};

        default:
            return state
    }
}

export const Store = legacy_createStore(reduce)
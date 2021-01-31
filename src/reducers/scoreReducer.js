// const INTIAL_STATE = {
//     score: null,
// }

const data = (state = [], action) => {
    switch (action.type) {
        case 'SCORE':
            return  action.payload
        default:
            return state;
    }
};

export default data;
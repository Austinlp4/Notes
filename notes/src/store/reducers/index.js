import { 
    DELETE_NOTE, 
    SET_UPDATE_NOTE, 
    UPDATE_NOTE, 
    NOTE_FETCH_START,
    NOTE_FETCH_SUCCESS,
    NOTE_FETCH_FAILURE,
    ADD_NOTE_START,
    ADD_NOTE_SUCCESS,
    ADD_NOTE_FAILURE,
    SEARCH_NOTE


} from '../actions';

const initialState = {
notes: [],
noteToUpdate: null,
isLoading: false,
addingNote: false,
results: []

};

export const notesReducer = (state=initialState, action) => {
switch(action.type) {
    case NOTE_FETCH_START:
        return {...state, isLoading: true};
    case NOTE_FETCH_SUCCESS:
        return { ...state, isLoading: false, notes: action.payload };
    case NOTE_FETCH_FAILURE:
        console.log(action.payload);
        return { ...state, isLoading: false, error: action.payload };
    case ADD_NOTE_START:
        return { ...state, addingNote: true };
    case ADD_NOTE_SUCCESS:
    console.log('action payload', action);
        return { ...state, addingNote: false, notes: [...state.notes , action.payload]  };
    case ADD_NOTE_FAILURE:
        console.log(action.payload);
        return { ...state, addingNote: false, error: action.payload };
    case DELETE_NOTE:
    console.log(action.id);
        return ({...state, notes: state.notes.filter(note => note.id !== action.id)});
    case SET_UPDATE_NOTE:
    const note = state.notes.find(note => note.title === action.payload)
        return {...state, noteToUpdate: note ? note : null}
    case UPDATE_NOTE:      
        let noteIndex = state.notes.findIndex(note => note.id === action.payload.id);
        console.log('noteindex', noteIndex);
        state.notes[noteIndex] = action.payload;
        return {...state, ...state.notes[noteIndex], noteToUpdate: null}
    case SEARCH_NOTE:
        let notesCopy = state.notes.slice();
        let result = notesCopy.filter(note => note.title.toLowerCase().includes(action.payload));
        return {...state, results: result}
    default:
        return state;
}
}
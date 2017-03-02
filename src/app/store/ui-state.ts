import {CompInput} from '../content/content.interfaces'

export interface ComponentStates {
  userId:number;
  // currentThreadId: number;
  navCompVM: CompInput;
  mainCompVM: CompInput;
}

export interface UiState {
    userId:number;
    // currentThreadId: number;
}


export const INITIAL_UI_STATE: UiState = {
    userId: undefined,
    // currentThreadId: undefined
};

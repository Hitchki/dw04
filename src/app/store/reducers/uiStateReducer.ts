import {UiState, INITIAL_UI_STATE} from '../ui-state'
import {USER_PROJECTS_LOADED_ACTION, UserProjectsLoadedAction} from '../actions'
// import {ApplicationState} from '../application-state'

export function uiState(state: UiState = INITIAL_UI_STATE, action) : UiState {

  switch (action.type) {
    case USER_PROJECTS_LOADED_ACTION:
      return handleLoadUserProjectsAction(state, action);

    default:
      return state;
  }
}

function handleLoadUserProjectsAction(
  state: UiState,
  action: UserProjectsLoadedAction): UiState {

  const projectData = action.payload;
  const newUiState = Object.assign({}, state);

  newUiState.userId = 17;

  return newUiState;
  // return { projects: projectData };
}

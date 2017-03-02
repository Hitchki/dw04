import {USER_PROJECTS_LOADED_ACTION, UserProjectsLoadedAction} from '../actions'
// import {ApplicationState} from '../application-state'
import {StoreData} from '../store-data'

export function storeData(state, action) : StoreData {
  switch (action.type) {
    case USER_PROJECTS_LOADED_ACTION:
      return handleLoadUserProjectsAction(state, action);

    default:
      return state;
  }
}


function handleLoadUserProjectsAction(
  state: StoreData,
  action: UserProjectsLoadedAction): StoreData {

  const projectData = action.payload;
  return {projects: projectData};
}

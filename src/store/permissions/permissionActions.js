import Permissions from "react-native-permissions";
import * as types from "./permissionActionTypes";

import {
  askForPermission,
  permissionDescriptions
} from "../../constants/Permissions";

const checkingPermissions = () => ({
  type: types.CHECKING
});

const finishedChecking = () => ({
  type: types.NOT_CHECKING
});

const updatePermissions = permissions => ({
  type: types.UPDATE_PERMISSIONS,
  permissions
});

const requestingPermission = () => ({
  type: types.REQUESTING_PERMISSION
});

const requestFail = () => ({
  type: types.REQUEST_FAIL
});

const requestSuccess = () => ({
  type: types.REQUEST_SUCCESS
});

export const checkPermissions = permissionsToCheck => {
  return dispatch => {
    console.log(permissionsToCheck);
    // You cannot request microphone permissions in the simulator
    if (__DEV__) {
      // eslint-disable-line
      const pos = permissionsToCheck.indexOf("microphone");
      if (pos !== -1) {
        permissionsToCheck.splice(pos, 1);
        console.warn(
          "You cannot request microphone permissions in the simulator"
        );
      }
    }

    dispatch(checkingPermissions());
    Permissions.checkMultiple(permissionsToCheck).then(response => {
      const newPermissions = {};
      permissionsToCheck.forEach(permission => {
        newPermissions[permission] = response[permission];
      });
      dispatch(finishedChecking());
      dispatch(updatePermissions(newPermissions));
    });
  };
};

export const checkAndAsk = (permission, permissionStatus) => {
  return dispatch => {
    dispatch(requestingPermission());
    console.log(`Requesting permission for ${permission}`);
    // TODO: Switch to causing a failed request in production
    const description = permissionDescriptions[permission]
      ? permissionDescriptions[permission]
      : "You need to write a description for this permission";

    askForPermission(
      permissionStatus,
      description,
      () => {
        // Called when the user denies the request
        dispatch(requestFail());
      },
      () => {
        // Called if the user agrees to the request
        Permissions.request(permission).then(response => {
          // Returns once the user has chosen to 'allow' or to 'not allow' access
          // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
          dispatch(requestSuccess());
          dispatch(
            updatePermissions({
              permission: response
            })
          );
        });
      }
    );
  };
};

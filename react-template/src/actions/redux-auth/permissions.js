export const SET_PERMISSIONS = 'SET_PERMISSIONS';

export function setPermissions(role, permissions) {
  return {type: SET_PERMISSIONS, role, permissions};
}

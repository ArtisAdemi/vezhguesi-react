export function roleIdToString(roleId: number): string {
  switch (roleId) {
    case 1:
      return "owner";
    case 2:
      return "admin";
    case 3:
      return "user";
    default:
      return "user";
  }
}

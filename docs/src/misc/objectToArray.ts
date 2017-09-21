export function objectToArray(object: object): any[] {
  const members = [];
  for (let member in object) {
    if (object.hasOwnProperty(member)) {
      members.push(member);
    }
  }
  return members;
}

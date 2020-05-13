export class User {
  id: number;
  firstName: string;
  lastName: string;

  constructor(_id: number, _firstName: string, _lastName: string) {
    this.id = _id;
    this.firstName = _firstName;
    this.lastName = _lastName;
  }
}

export function generateUser (): User {
  return new User(1, 'joey', 'scripter');
}

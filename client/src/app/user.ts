export class User {
  id: number;
  username = '';
  password = '';
  phone = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

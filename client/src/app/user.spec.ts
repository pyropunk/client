import {User} from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User()).toBeTruthy();
  });
  
  it('should accept values in the constructor', () => {
    let user = new User({
      username: 'hello',
      password: 'here',
      phone: 'phone'
    });
    expect(user.username).toEqual('hello');
    expect(user.password).toEqual('here');
    expect(user.phone).toEqual('phone');
  });
});

import UserService from '@services/UserService';

test('it should be ok', () => {
  const userService = new UserService();
  expect(userService.name).toBe('userService');
});

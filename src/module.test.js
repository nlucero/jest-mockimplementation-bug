import foo from './module';
import { isKey } from './utils';

jest.mock('./utils');

test('', () => {
  isKey.mockImplementation(() => () => false);

  expect(foo('wew')).toBe(false);
})
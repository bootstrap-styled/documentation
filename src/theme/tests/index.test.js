import { makeTheme } from '../index';

describe('makeTheme', () => {
  it('should have theme defined', () => {
    expect(makeTheme()).toBeDefined();
  });
  it('should create scope', () => {
    const customTheme = {
      '$nav-styleguide-height': '100%',
    };
    expect(typeof makeTheme(customTheme).navigationStyleguide).toBeDefined();
    expect(typeof makeTheme(customTheme).styleguide).toBeDefined();
  });
});

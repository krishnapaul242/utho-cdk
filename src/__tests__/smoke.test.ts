import { describe, it, expect } from 'vitest';
import { ApiClient } from '../runtime/client.js';

describe('ApiClient', () => {
  it('constructs', () => {
    const c = new ApiClient({ baseUrl: 'https://api.example.com' });
    expect(c).toBeTruthy();
  });
});

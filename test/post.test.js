import '../src/lib/dotenv';

import path from 'path';
import request from 'supertest';

import publicPath from '../src/utils/publicPath';
import app from '../src/App';

describe('POST /upload', () => {
  test('Realiza upload de arquivos na DigitalOcean Space', async () => {
    const result = await request(app)
      .post('/api/v1/upload')
      .attach('upload', path.resolve(publicPath, 'file-test.png'));

    expect(result.statusCode).toBe(200);
  });
});

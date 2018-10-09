import { PipedemoPipe } from './pipedemo.pipe';

describe('PipedemoPipe', () => {
  it('create an instance', () => {
    const pipe = new PipedemoPipe();
    expect(pipe).toBeTruthy();
  });
});

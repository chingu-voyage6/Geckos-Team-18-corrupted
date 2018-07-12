import { CollectionModule } from './collection.module';

describe('CollectionModule', () => {
  let collectionModule: CollectionModule;

  beforeEach(() => {
    collectionModule = new CollectionModule();
  });

  it('should create an instance', () => {
    expect(collectionModule).toBeTruthy();
  });
});

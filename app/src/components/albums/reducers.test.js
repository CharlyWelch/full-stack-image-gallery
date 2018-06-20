import {
  albums,
  ALBUMS_LOAD,
  ALBUM_ADD,
  getAlbums 
} from './reducers';

const testAlbum1 = {
  title: 'insects',
  description: 'the cutest'
};

const testAlbum2 = {
  title: 'fuzzies',
  description: 'the second cutest'
};

describe('albums reducer tests', () => {

  it('has a default empty array', () => {
    const state = albums(undefined, {});
    expect(state).toEqual([]);
  });

  it('loads albums', () => {
    const state = albums([], { type: ALBUMS_LOAD, payload: [testAlbum1, testAlbum2] });
    expect(state).toEqual([testAlbum1, testAlbum2]);
  });

  it('adds an album', () => {
    const state = albums([testAlbum1], { type: ALBUM_ADD, payload: testAlbum2 });
    expect(state).toEqual([testAlbum1, testAlbum2]);
  });

});

describe('Selector tests', () => {
  it('gets albums', () => {
    const albums = [testAlbum1, testAlbum2];
    const retrieved = getAlbums({ albums });
    expect(retrieved).toEqual(albums);
  });
});
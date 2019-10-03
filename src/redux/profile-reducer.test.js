import profileReducer, {addPost, deletePost} from "./profile-reducer";

it('new post should be incremented', () => {
  let action = addPost('it-kamasutra');

  let state = {
    posts: [
      {id: 1, message: 'Hi, how are you?', likesCount: 12},
      {id: 2, message: 'It\'s my first post', likesCount: 11},
      {id: 3, message: 'Blabla', likesCount: 11},
      {id: 4, message: 'Dada', likesCount: 11}
    ]
  };

  let newState = profileReducer(state,action);

  expect(newState.posts.length).toBe(5);
});

it('new post should has messages with 0 likes', () => {
  let action = addPost('it-kamasutra');

  let state = {
    posts: [
      {id: 1, message: 'Hi, how are you?', likesCount: 12},
      {id: 2, message: 'It\'s my first post', likesCount: 11},
      {id: 3, message: 'Blabla', likesCount: 11},
      {id: 4, message: 'Dada', likesCount: 11}
    ]
  };

  let newState = profileReducer(state,action);

  expect(newState.posts[4].likesCount).toBe(0);
});

it('new post should has messages with values is - it-kamasutra', () => {
  let action = addPost('it-kamasutra');

  let state = {
    posts: [
      {id: 1, message: 'Hi, how are you?', likesCount: 12},
      {id: 2, message: 'It\'s my first post', likesCount: 11},
      {id: 3, message: 'Blabla', likesCount: 11},
      {id: 4, message: 'Dada', likesCount: 11}
    ]
  };

  let newState = profileReducer(state,action);

  expect(newState.posts[4].message).toBe('it-kamasutra');
});
it('after deleting length of messages should be decrement', () => {
  let action = deletePost(1);

  let state = {
    posts: [
      {id: 1, message: 'Hi, how are you?', likesCount: 12},
      {id: 2, message: 'It\'s my first post', likesCount: 11},
      {id: 3, message: 'Blabla', likesCount: 11},
      {id: 4, message: 'Dada', likesCount: 11}
    ]
  };

  let newState = profileReducer(state,action);

  expect(newState.posts.length).toBe(3);
});




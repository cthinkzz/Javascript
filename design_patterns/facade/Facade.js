/**
 * Easy to change in the future, a wrapper between the code and business logic.
 * advantage: easy to call the function, code reusability and easy to refactor in the future as we will only modify the facade function, i.e only at one place
 */

import fetch from 'node-fetch';

function getUsers() {
  return fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => res.json());
}

function getUserPosts(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => res.json());
}

getUsers().then((users) => {
  users.forEach((user) => {
    getUserPosts(user.id).then((posts) => {
      console.log(user.name);
      console.log(posts.length);
    });
  });
});

/**
 * above functions can be modularised as
 */
function getFetch(url, params = {}) {
  let queryParams = '';
  Object.entries(params).forEach(([key, value]) => {
    queryParams = `${key}=${value}`;
  });
  return fetch(`${url}?${queryParams}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => res.json());
}

getFetch('https://jsonplaceholder.typicode.com/users').then((users) => {
  users.forEach((user) => {
    getFetch(`https://jsonplaceholder.typicode.com/posts`, {
      userId: user.id,
    }).then((posts) => {
      console.log(user.name);
      console.log(posts.length);
    });
  });
});

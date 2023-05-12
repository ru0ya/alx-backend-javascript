/* eslint-disable */
import { uploadPhoto, createUser } from './utils.js';

function handleProfileSignup() {
  const prom = [uploadPhoto(), createUser()];

  Promise.all(prom)
    .then((value) => {
      console.log(`${value[0].body} ${value[1].firstName} ${value[1].lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

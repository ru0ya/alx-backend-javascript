/* eslint-disable */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signup = signUpUser(firstName, lastName);
  const upload = uploadPhoto(fileName);

  return Promise.allSettled([signup, upload])
    .then((results) => {
      return results.map((result) => {
        return {
          status: result.status,
          value: result.status === 'fulfilled' ? result.value : null,
        };
      });
    });
}

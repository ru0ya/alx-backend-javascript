/* eslint-disable */
import { uploadPhoto, createUser } from './utils.js'


export default async function asyncUploadUser() {
	try {
		const uPhoto = await uploadPhoto();
		const cUser = await createUser();

		return ({ photo: uPhoto, user: cUser});
	} catch (error) {
		return ({ photo: null, user: null });
	}
}

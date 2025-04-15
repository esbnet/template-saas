//import { getStorage } from "firebase-admin/storage";
import 'server-only';

import { cert, getApps, initializeApp } from 'firebase-admin/app';

import { getFirestore } from 'firebase-admin/firestore';

/* if (!process.env.FIREBASE_PRIVATE_KEY_BASE64) {
    throw new Error("FIREBASE_PRIVATE_KEY_BASE64 is not defined");
} */

//const decodedKey = Buffer.from(process.env.FIREBASE_PRIVATE_KEY_BASE64, "base64").toString("utf-8");

const decodedKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

export const firebaseCert = cert({
	projectId: process.env.FIREBASE_PROJECT_ID,
	clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
	privateKey: decodedKey,
});

if (!getApps().length) {
	initializeApp({
		credential: firebaseCert,
		//storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	});
}

export const db = getFirestore();
//export const storage = getStorage().bucket();

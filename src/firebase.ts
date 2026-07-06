import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const metaEnv = (import.meta as any).env || {};

const firebaseConfig = {
  apiKey: metaEnv.VITE_FIREBASE_API_KEY,
  authDomain: metaEnv.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: metaEnv.VITE_FIREBASE_PROJECT_ID,
  storageBucket: metaEnv.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: metaEnv.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: metaEnv.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

/**
 * Uploads a project cover image to Firebase Storage and saves the URL to Firestore.
 * Path in Storage: project-covers/{projectId}/{timestamp}-{filename}
 * Path in Firestore: projects/{projectId} with coverImageUrl field
 */
export async function uploadProjectImage(projectId: string, file: File): Promise<string> {
  if (!projectId) {
    throw new Error("Project ID is required.");
  }
  
  // Format clean filename to avoid character issues
  const cleanFilename = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
  const timestamp = Date.now();
  const storagePath = `project-covers/${projectId}/${timestamp}-${cleanFilename}`;
  
  // Create Storage Reference
  const storageRef = ref(storage, storagePath);
  
  // Upload the file bytes
  await uploadBytes(storageRef, file);
  
  // Get the download URL
  const downloadUrl = await getDownloadURL(storageRef);
  
  // Save or update in Firestore projects/{projectId}
  const projectDocRef = doc(db, "projects", projectId);
  
  await setDoc(projectDocRef, {
    coverImageUrl: downloadUrl,
    updatedAt: new Date().toISOString()
  }, { merge: true });
  
  return downloadUrl;
}

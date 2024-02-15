// Importing the openDB function from the 'idb' library
import { openDB } from 'idb';

// Function to initialize the database
const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      // Checking if the 'jate' object store already exists in the database
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      // Creating the 'jate' object store with auto-incrementing key
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Function to save text to the database
export const putDb = async (textEditorContent) => {
  const jateDB = await openDB('jate', 1);
  const transaction = jateDB.transaction('jate', 'readwrite');
  const store = transaction.objectStore('jate');
  const request = store.put({ jate: textEditorContent });
  const savedText = await request;
  console.log('saved text to database;', savedText);
};

// Function to retrieve text from the database
export const getDb = async () => {
  const jateDB = await openDB('jate', 1);
  const transaction = jateDB.transaction('jate', 'readonly');
  const store = transaction.objectStore('jate');
  const request = store.get('jate');
  const retrievedText = await request;
  console.log('retrieved text from database;', retrievedText);
  return retrievedText;
};

// Initializing the database
initdb();

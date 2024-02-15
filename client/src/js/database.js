import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1,
  {
    upgrade(db)
    {
      if (db.objectStoreNames.contains('jate'))
      {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', {keyPath: 'id', autoIncrement: true});
      console.log('jate database created');
    },
  });

export const putDb = async (textEditorContent) =>
{
  const jateDB = await openDB('jate', 1);
  const transaction = jateDB.transaction('jate', 'readwrite');
  const store = transaction.objectStore('jate');
  const request = store.put({jate: textEditorContent});

  const savedText = await request;
  console.log('saved text to database:', savedText);
}

export const getDb = async () =>
{
  const jateDB = await openDB('jate', 1);
  const transaction = jateDB.transaction('jate', 'readonly');
  const store = transaction.objectStore('jate');
  const request = store.get('jate');

  const retrievedText = await request;
  console.log('retrieved text from database:', retrievedText);

  return retrievedText;
}

initdb();

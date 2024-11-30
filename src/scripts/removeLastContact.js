import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length > 0) {
      contacts.pop();
    } else {
      console.log('No contacts');
    }
    await writeContacts(contacts);
  } catch (error) {
    console.error(error);
  }
};

removeLastContact();

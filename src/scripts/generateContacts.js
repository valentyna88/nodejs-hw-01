import { readContacts } from '../utils/readContacts';

const generateContacts = async (number) => {
  try {
    const existingContacts = await readContacts();
  } catch (error) {}
};

generateContacts(5);

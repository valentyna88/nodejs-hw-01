import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = (contacts) =>
  fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));

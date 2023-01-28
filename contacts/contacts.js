const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "contacts.json");

const updateContacts = async (contacts) =>
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

const listContacts = async () => {
  const contacts = await fs.readFile(contactsPath, "utf-8");
  return JSON.parse(contacts);
};

const getContactById = async (id) => {
  const contacts = await listContacts();
  const contact = contacts.find((el) => el.id === id);
  return contact || null;
};

const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  const newContatc = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  contacts.push(newContatc);
  await updateContacts(contacts);
  return newContatc;
};

const removeContact = async (id) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((el) => el.id === id);
  if (idx === -1) return null;
  const [deletedContact] = contacts.splice(idx, 1);
  await updateContacts(contacts);
  return deletedContact;
};

const updateContact = async (id, { name, email, phone }) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((el) => el.id === id);
  if (idx === -1) return null;
  contacts[idx] = { id, name, email, phone };
  await updateContacts(contacts);
  return contacts[idx];
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
};

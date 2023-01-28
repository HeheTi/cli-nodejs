const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
} = require("./contacts/contacts");

const invokeAction = async (args) => {
  const { action, id: idContact, name, email, phone } = args;
  const id = String(idContact);

  try {
    switch (action) {
      case "list":
        const contacts = await listContacts();
        console.table(contacts);
        break;

      case "get":
        const contact = await getContactById(String(id));
        console.table(contact);
        break;

      case "add":
        const newContact = await addContact(name, email, phone);
        console.table(newContact);
        break;

      case "remove":
        const removedContact = await removeContact(id);
        console.table(removedContact);
        break;

      case "change":
        const updatedContact = await updateContact(id, {
          name,
          email,
          phone,
        });
        console.table(updatedContact);
        break;

      default:
        console.warn("\x1B[31m Unknown action type!");
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = invokeAction;

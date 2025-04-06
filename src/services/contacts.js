import { ContactsCollection } from '../db/models/contacts.js';

export const getAllContacts = async () => {
  const contacts = await ContactsCollection.find();
  return contacts;
};

export const getContactById = async (contactId) => {
  const contact = await ContactsCollection.findById(contactId);
  return contact;
};

export const createContact = async (payload) => {
  const contact = await ContactsCollection.create(payload);
  return contact;
};

export const updateContact = async (contactId, payload) => {
  const rawResult = await ContactsCollection.findOneAndUpdate(
    { _id: contactId },
    payload,
    { new: true, includeResultMetadata: true },
  );

  if (!rawResult || !rawResult.value) return null;

  return rawResult.value;
};

export const deleteContact = async (contactId) => {
  const contact = await ContactsCollection.findOneAndDelete({ _id: contactId });
  return contact;
};

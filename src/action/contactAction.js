import {createContact,DELETE_CONTACT,get_Contact,UPDATE_CONTACT,SELECT_CONTACT, CLEAR_ALL, DELETE_SELECTE_CONTACT} from '../constant/type'
// action
export const addContact=(contact)=>{
    return {
        type:createContact,
        payload:contact
    }};
    // get contact by id
export const getContact = (id) => ({
    type: get_Contact,
    payload:id
});

// update contact
export const updateContactById = (updatedContact) => ({
    type: UPDATE_CONTACT,
    payload:updatedContact
})

// delete contact
export const deleteContact = (id) => ({
    type: DELETE_CONTACT,
    payload:id
})

// Select all contacts
export const selectAllContacts = (id) => ({
    type: SELECT_CONTACT,
    payload:id
})

// clear all Contact
export const clearAllContact = () => ({
    type: CLEAR_ALL,
    
})

// Delete All contact
export const deleteAllContact = () => ({
    type: DELETE_SELECTE_CONTACT,
    
})


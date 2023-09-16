let contacts = []

function addContact(event) {
 event.preventDefault()
 let form = event.target 

  let contact = {
    id: generateId(),
    name: form.name.value,
    phone: form.phone.value,
    emergencyContact: form.emergencyContact.checked
  }

  contacts.push(contact)
  saveContacts()
  form.reset()
}

function saveContacts() {

  window.localStorage.setItem("localContacts", JSON.stringify(contacts))

}

function loadContacts() {

  let localContactsData = JSON.parse(window.localStorage.getItem('localContacts'))
  if (localContactsData){
    contacts = localContactsData
  }
}

/**
 * This function targets the contacts-list on the 
 * DOM and adds a new div element for each of the
 * contacts in the contacts array
 */
function drawContacts() {

  

}

/**
 * This function is called with a contact id
 * and will use the id to find and remove the 
 * contact by their id from the list of contacts
 * *** hints: 
 * *** findIndex: resources/findIndex.jpg
 * *** splice: resources/splice.jpg
 * @param {string} contactId 
 */
function removeContact(contactId) {
}

/**
 * Toggles the visibility of the AddContact Form
 */
function toggleAddContactForm() {
}


/**
 * Used to generate a random string id for mocked
 * database generated Id
 * @returns {string}
 */
function generateId() {
  return Math.floor(Math.random() * 10000000) + "-" + Math.floor(Math.random() * 10000000)
}


loadContacts()
drawContacts()

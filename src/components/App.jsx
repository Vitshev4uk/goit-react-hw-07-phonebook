import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { useSelector } from 'react-redux';



function App() {

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoading = useSelector(state => state.isLoading);

  return (
    <div>
      <h1
        style={{
          textAlign: 'center',
          margin: 15,
        }}
      >
        Phonebook
      </h1>
      <ContactForm />
      <h2
        style={{
          textAlign: 'center',
          margin: 15,
        }}
      >
        Contacts
      </h2>
      <Filter />
      {isLoading && <b>Request in progress...</b>}
      <ContactList />
    </div>
  );
}

export default App;

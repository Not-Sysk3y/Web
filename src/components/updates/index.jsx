import React, { useState, useEffect } from 'react';
import './Home2.css'; // Import CSS file for styling
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot } from 'firebase/firestore';

const UpdatesPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [updates, setUpdates] = useState([]);
  const [userEmail, setUserEmail] = useState(null); // Initialize userEmail state

  // Your Firebase config
  const firebaseConfig = {
    apiKey: "AIzaSyCmlTNThrKTdrB0RTx75u-omoOlzD8F4lw",
    authDomain: "fmll-b61d1.firebaseapp.com",
    projectId: "fmll-b61d1",
    storageBucket: "fmll-b61d1.appspot.com",
    messagingSenderId: "750638414631",
    appId: "1:750638414631:web:82c713afd3221da8370702"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUserEmail(user.email); // Set userEmail state if user is authenticated
      } else {
        setUserEmail(null); // Set userEmail state to null if user is not authenticated
      }
    });
    return () => unsubscribe(); // Unsubscribe from the listener when component unmounts
  }, [auth]); // Include 'auth' as a dependency

  // Use useEffect to fetch updates from Firestore when the component mounts
  useEffect(() => {
    const q = query(collection(db, "updates"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newUpdates = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setUpdates(newUpdates);
    });

    return () => unsubscribe(); // Unsubscribe from the listener when component unmounts
  }, [db]); // Include 'db' as a dependency

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleModalClose = () => {
    setTitle('');
    setMessage('');
    setShowModal(false);
  };

  const handleAddUpdate = async () => {
    try {
      await addDoc(collection(db, "updates"), {
        title: title,
        message: message,
        createdAt: new Date()
      });
    } catch (error) {
      console.error("Error adding update: ", error);
    }

    // Clear form fields
    setTitle('');
    setMessage('');
    setShowModal(false);
  };

  return (
    <div className="updates-page-container">
      <h1>Updates Page</h1>
      
      {/* Add Update button - Render only if user's email matches */}
      {userEmail === "rp110404@gmail.com" && (
        <button className="updates-page-add-update-button" onClick={() => setShowModal(true)}>Add Update</button>
      )}

      {/* Render updates */}
      <div className="updates-page-update-list">
        {updates.map((update, index) => (
          <div className="updates-page-update-container" key={index}>
            <h3>{update.title}</h3>
            <p className="update-message">{update.message}</p>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="updates-page-modal">
          <div className="updates-page-modal-content">
            <span className="updates-page-close" onClick={handleModalClose}>&times;</span>
            <input type="text" placeholder="Title" value={title} onChange={handleTitleChange} />
            <textarea placeholder="Message" value={message} onChange={handleMessageChange} />
            <button onClick={handleAddUpdate}>Add</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdatesPage;

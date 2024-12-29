import React, { useState, useEffect } from 'react';
import UserCard from './components/UserCard';
import EditModal from './components/EditModal';

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data.map(user => ({ ...user, liked: false }))));
  }, []);

  const handleLike = (id) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, liked: !user.liked } : user
    ));
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleSave = (editedUser) => {
    setUsers(users.map(user => 
      user.id === editedUser.id ? editedUser : user
    ));
    setEditingUser(null);
  };

  const handleRemove = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {users.map(user => (
          <UserCard
            key={user.id}
            user={user}
            onLike={handleLike}
            onEdit={handleEdit}
            onRemove={handleRemove}
          />
        ))}
      </div>
      {editingUser && (
        <EditModal
          user={editingUser}
          onSave={handleSave}
          onClose={() => setEditingUser(null)}
        />
      )}
    </div>
  );
};

export default App;


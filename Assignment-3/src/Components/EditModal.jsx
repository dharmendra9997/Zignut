import React, { useState } from 'react';

const EditModal = ({ user, onSave, onClose }) => {
  const [editedUser, setEditedUser] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedUser);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-[500px] ">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-3 border-b">
          <h2 className="text-lg">Basic Modal</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-4">
            <div className="flex items-center">
              <label className="w-24 text-right mr-2">
                <span className="text-red-500">*</span> Name:
              </label>
              <input
                type="text"
                name="name"
                value={editedUser.name}
                onChange={handleChange}
                className="flex-1 border rounded px-3 py-1 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="flex items-center">
              <label className="w-24 text-right mr-2">
                <span className="text-red-500">*</span> Email:
              </label>
              <input
                type="email"
                name="email"
                value={editedUser.email}
                onChange={handleChange}
                className="flex-1 border rounded px-3 py-1 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="flex items-center">
              <label className="w-24 text-right mr-2">
                <span className="text-red-500">*</span> Phone:
              </label>
              <input
                type="text"
                name="phone"
                value={editedUser.phone}
                onChange={handleChange}
                className="flex-1 border rounded px-3 py-1 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="flex items-center">
              <label className="w-24 text-right mr-2">
                <span className="text-red-500">*</span> Website:
              </label>
              <input
                type="text"
                name="website"
                value={editedUser.website}
                onChange={handleChange}
                className="flex-1 border rounded px-3 py-1 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end mt-6 space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1 border rounded hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              OK
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;


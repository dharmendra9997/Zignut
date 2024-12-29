import React from "react";
import { HeartTwoTone, HeartOutlined, EditOutlined , DeleteOutlined, MailOutlined , PhoneOutlined ,GlobalOutlined } from "@ant-design/icons";

const UserCard = ({ user, onLike, onEdit, onRemove }) => {
  return (
    <div className="bg-white  overflow-hidden">
      <div className="p-4">
        <div className="w-48 h-48 mx-auto mb-4">
          <img
            src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
            alt={user.name}
            className="w-full h-full object-cover "
          />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-center">{user.name}</h3>
        <div className="space-y-2">
        <div className="flex items-center">
  <MailOutlined className="h-5 w-5 mr-2 text-gray-600" />
  <p className="text-sm text-gray-600">{user.email}</p>
</div>
<div className="flex items-center">
  <PhoneOutlined className="h-5 w-5 mr-2 text-gray-600" />
  <p className="text-sm text-gray-600">{user.phone}</p>
</div>
<div className="flex items-center">
  <GlobalOutlined className="h-5 w-5 mr-2 text-gray-600" />
  <p className="text-sm text-gray-600">{user.website}</p>
</div>
</div>
      </div>
      <div className="border-t flex justify-around p-2">
        <button
          onClick={() => onLike(user.id)}
          className="p-2 hover:bg-gray-100 rounded-full transition duration-200"
        >
          {user.liked ? (
            <HeartTwoTone
              twoToneColor="#ef4444"
              className="text-red-500 text-xl transition duration-200"
            />
          ) : (
            <HeartOutlined className="text-red-500 text-xl transition duration-200" />
          )}
        </button>
        <button
          onClick={() => onEdit(user)}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
        >
          <EditOutlined className="text-gray-600 text-lg transition-colors duration-200" />
        </button>
        <button
          onClick={() => onRemove(user.id)}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
        >
          <DeleteOutlined className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default UserCard;

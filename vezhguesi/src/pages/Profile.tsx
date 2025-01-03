import React, { useEffect, useState } from "react";
import profile from "../assets/profile.jpg";
import { UpdateUserDataRequest } from "../models/Auth";
import AuthService from "../services/Auth";
import { useAuth } from "../hooks/useAuth";

const Profile: React.FC = () => {
  const { currentUser, authToken, setCurrentUser } = useAuth();

  const userData = currentUser;

  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
  });

  useEffect(() => {
    setFormData({
      firstName: userData?.firstName || "",
      lastName: userData?.lastName || "",
      username: userData?.username || "",
      email: userData?.email || "",
    });
  }, [userData]);

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedUser: UpdateUserDataRequest = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      username: formData.username,
    };

    AuthService.updateUserData(updatedUser, authToken || "", setCurrentUser);
  };

  return (
    <div className="w-[100%]">
      <div className="md:px-20 bg-white p-6">
        <div className="text-4xl mb-4">Settings</div>
        <div className="flex gap-x-4">
          <h1>Profile</h1>
          <h1>Payments</h1>
        </div>
      </div>
      <div className="flex md:flex-row flex-col bg-white mt-8 py-4">
        <div className="leftSide md:w-[45%] md:px-[6%] md:border-2 md:border-l-0 md:border-t-0 md:border-b-0 flex flex-col py-12 justify-center">
          <div className="flex flex-col items-center mb-4">
            <h1 className="text-[#6C6C6C] text-3xl mb-4">Profile</h1>
            <img src={profile} alt="" loading="lazy" />
            <h1 className="font-bold text-3xl">
              {userData
                ? `${userData.firstName} ${userData.lastName}`
                : "First Last Name"}
            </h1>
            <h1 className="text-[#6C6C6C] text-xl">
              {userData ? userData.email : "Email"}
            </h1>
          </div>
          <div className="flex justify-around mt-10">
            <div className="items-center flex flex-col">
              <h1 className="text-5xl font-semibold">21</h1>
              <h1 className="text-[#6C6C6C] mt-2">Bots</h1>
            </div>
            <div className="items-center flex flex-col">
              <h1 className="text-5xl font-semibold">12</h1>
              <h1 className="text-[#6C6C6C] mt-2">Active</h1>
            </div>
            <div className="items-center flex flex-col">
              <h1 className="text-5xl font-semibold">9</h1>
              <h1 className="text-[#6C6C6C] mt-2">Used</h1>
            </div>
          </div>
        </div>
        <div className="rightSide md:w-[55%] md:px-[6%] py-24">
          <form action="" className="pt-6" onSubmit={handleSubmit}>
            <div className="flex justify-between border-2 border-l-0 border-r-0 border-t-0 pb-6">
              <h1 className="font-bold text-lg">Account Information</h1>
              <div className="flex gap-x-4">
                <button
                  type="button"
                  onClick={toggleEditMode}
                  className="bg-[#667A8A] rounded-md px-5 py-1 text-white"
                >
                  {isEditing ? "Cancel" : "Edit"}
                </button>
                <button
                  type="submit"
                  className="bg-[#0C7FDA] rounded-md px-8 py-1 text-white font-semibold text-sm"
                  disabled={!isEditing}
                >
                  SAVE
                </button>
              </div>
            </div>
            <div className="flex gap-x-4 mt-6  justify-between">
              <div className="flex flex-col w-[55%]">
                <label htmlFor="firstName" className="mb-3">
                  FIRST NAME
                </label>
                <input
                  value={formData.firstName}
                  type="text"
                  name="firstName"
                  id="firstName"
                  className=" border-[#E5E5E5] p-2 border rounded-md shadow-sm   placeholder:text-[#2c2c31] focus:outline-none py-2"
                  disabled={!isEditing}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col w-[45%]">
                <label htmlFor="lastName" className="mb-3">
                  LAST NAME
                </label>
                <input
                  value={formData.lastName}
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="border-[#E5E5E5] p-2 border rounded-md shadow-sm   placeholder:text-[#2c2c31] focus:outline-none py-2"
                  disabled={!isEditing}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col mt-3">
              <label htmlFor="username" className="mb-3">
                Username
              </label>
              <input
                value={formData.username}
                type="text"
                name="username"
                id="username"
                className="border-[#E5E5E5] p-2 border rounded-md shadow-sm   placeholder:text-[#2c2c31] focus:outline-none py-2"
                disabled={!isEditing}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col mt-3">
              <label htmlFor="email" className="mb-3">
                EMAIL
              </label>
              <input
                value={formData.email}
                type="text"
                name="email"
                id="email"
                className="border-[#E5E5E5] p-2 border rounded-md shadow-sm   placeholder:text-[#2c2c31] focus:outline-none py-2 "
                disabled={true}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;

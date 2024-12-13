import React, { useState } from "react";
import image1 from "../../assets/image 1.jpg";
import { useNavigate } from "react-router-dom";
import { FaBuilding } from "react-icons/fa";
import Swal from "sweetalert2";
import { OrgRequest } from "../../models/Org";
import OrgService from "../../services/Org";

const SetOrganization: React.FC = () => {
  const [organizationData, setOrganizationData] = useState({
    organizationName: "",
    organizationSize: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState<{
    organizationName?: string;
    organizationSize?: string;
  }>({});

  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setOrganizationData((prevData: typeof organizationData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors: Partial<typeof organizationData> = {};
    if (!organizationData.organizationName.trim())
      newErrors.organizationName = "Organization Name is Required";
    if (!organizationData.organizationSize)
      newErrors.organizationSize = "Organization Size must be selected";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const orgRequest: OrgRequest = {
      name: organizationData.organizationName,
      size: organizationData.organizationSize,
      token: localStorage.getItem("token") || "",
    };

    setIsLoading(true);
    try {
      // Here you would typically make an API call to save the organization data
      await OrgService.createOrganization(orgRequest).then((res) => {
        console.log(res);
        if (res) {
          Swal.fire({
            icon: "success",
            title: "Organization Set Successfully!",
            text: "Welcome to your new workspace.",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard");
        }
      });


    } catch {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image1})`,
      }}
    >
      <div className="flex flex-col p-8 items-center backdrop-blur-md bg-white/10 border border-opacity-10 shadow-lg rounded-lg w-full max-w-md mx-4">
        <div className="mb-6 text-center">
          <FaBuilding className="text-4xl text-white mb-4 mx-auto" />
          <h2 className="text-3xl font-bold text-white">
            Set your organization
          </h2>
          <p className="text-gray-200 mt-2">Tell us about your workspace</p>
        </div>

        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div className="space-y-4">
            <div>
              <input
                type="text"
                name="organizationName"
                placeholder="Enter your organization name"
                value={organizationData.organizationName}
                onChange={handleChange}
                className="w-full p-3 backdrop-blur-md bg-white/10 border border-opacity-20 rounded-lg shadow-sm 
                          placeholder:text-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 
                          focus:border-transparent transition-all duration-200"
              />
              {errors.organizationName && (
                <p className="text-red-400 text-sm mt-1 pl-1">
                  {errors.organizationName}
                </p>
              )}
            </div>

            <div>
              <select
                name="organizationSize"
                value={organizationData.organizationSize}
                onChange={handleChange}
                className="w-full p-3 cursor-pointer backdrop-blur-md bg-white/10 border border-opacity-20 
                          rounded-lg shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 
                          focus:border-transparent transition-all duration-200"
              >
                <option value="" className="text-gray-800">
                  Select organization size
                </option>
                <option value="1-10" className="text-gray-800">
                  1-10 employees
                </option>
                <option value="11-50" className="text-gray-800">
                  11-50 employees
                </option>
                <option value="51-200" className="text-gray-800">
                  51-200 employees
                </option>
                <option value="201-500" className="text-gray-800">
                  201-500 employees
                </option>
                <option value="500+" className="text-gray-800">
                  500+ employees
                </option>
              </select>
              {errors.organizationSize && (
                <p className="text-red-400 text-sm mt-1 pl-1">
                  {errors.organizationSize}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full p-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                     transform transition-all duration-200 hover:scale-[1.02] disabled:opacity-50 
                     disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isLoading ? (
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Set Organization"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SetOrganization;

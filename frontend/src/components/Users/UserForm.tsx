import { ChangeEvent } from "react";
import { useState } from "react";
import { addUser } from "../../shared/services/userApi";
import { UserFormType } from "../../types/user";

const UserForm = () => {
  const [formData, setFormData] = useState<UserFormType>();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputName = event.currentTarget.name;
    const value = event?.target?.value;
    setFormData((prev: any) => {
      return {
        ...prev,
        [`${inputName}`]: value,
      };
    });
  };
  const submitForm = async (formData: UserFormType) => {
    console.log("formData", formData);
    await addUser(formData);
  };
  return (
    <>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-black-900 md:text-5xl lg:text-6xl dark:text-black">
        User Form
      </h1>
      <div className="formWrapper">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            submitForm(formData as UserFormType);
          }}
          method="POST"
        >
          <div className="inputContainer">
            <div>Name</div>
            <div>
              <input
                name="name"
                type="text"
                value={formData?.name}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          <div className="inputContainer">
            <div>Birth date</div>
            <div className="date">
              <input
                name="birthdate"
                type="date"
                value={formData?.birthdate}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          <div className="inputContainer">
            <div>Country Name</div>
            <div>
              <input
                name="country"
                type="text"
                value={formData?.country}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          <div>
            <button className="button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-10">
              Add User
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserForm;

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
      <h1>User Form</h1>
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
              />
            </div>
          </div>
          <div>
            <button className="button">Add User</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserForm;

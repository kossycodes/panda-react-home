import React, { useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";

export default function PhoneForms() {
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+234");

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleCountryCodeChange = (selectedOption) => {
    setCountryCode(selectedOption.value);
  };

  const countryOptions = [
    { value: "+234", label: "+234 (Nigeria)" },
    { value: "+1", label: "+1 (United States)" },
    { value: "+44", label: "+44 (United Kingdom)" },
    // Add more country options here
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: "none",
      boxShadow: state.isFocused ? "none" : "none",
      "&:hover": {
        borderColor: state.isFocused ? "#aaa" : "#aaa",
      },
      backgroundColor: "#F6F6F6", // add background color here
    }),
  };

  return (
    <div className="flex justify-center relative px-2  mx-auto ">
      <form className="card" action="">
        <div className="mx-8 relative">
          {/*first Rectangle */}
          <section className="flex-col  gap-10 justify-between    px-4 py-3 mt-5 bg-greybg2 w-100% h-auto rounded-md border border-1 border-greybg ">
            <div className="">
              <p className="font-space ml-3 text-sm text-black font-normal">
                Receiver's Phone Number{" "}
              </p>
            </div>
            <div className="flex justify-start mr-0  items-center">
              
              <Select
                options={countryOptions}
                value={{ value: countryCode, label: countryCode }}
                onChange={handleCountryCodeChange}
                styles={customStyles}
                isSearchable={false}
                className="w-32 text-lg  md:w-32 bg-greybg2 font-space font-semibold  mr-0  md:text-xl text-black"
                menuPlacement="auto"
                menuPortalTarget={document.body}
                components={{
                  IndicatorSeparator: () => null,
                  DropdownIndicator: () => (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className=" h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  ),
                }}
              />
              <input
                type="tel"
                placeholder="090-000-000-00"
                value={phone}
                onChange={handlePhoneChange}
                className="block w-full   pl-4  text-black bg-greybg2 text-xl font-semibold font-space "
              />
            </div>
          </section>

          {/*Horizontal line */}
          <section className="flex justify-center">
               <hr className="line  border border-solid border-line mt-8" />
          </section>

          <section>
            <p className="flex justify-center text-lg text-bluebg font-space font-bold mt-8">Confirm User Details</p>
          </section>

          <section className="flex mt-8 gap-8 items-center">
            <div className="flex flex-col gap-5">
               <p className=" font-space font-normal text-sm">Account Name:</p>
               <p className="font-space font-normal text-sm">Gender:</p>
               <p className="font-space font-normal text-sm">Country:</p>
            </div>
            <div className="flex flex-col gap-5">
               <p className="font-space font-bold text-sm">Precious Tom</p>
              <p className="font-space font-bold text-sm">Male</p>
              <p className="font-space font-bold text-sm">Nigeria (NGN) </p>
            </div>
          </section>

          {/*Transaction button  */}
          <section className="flex justify-center mt-8">
            <Link to="/send" className="w-full">
              <button className="inline-block rounded-full w-full text-white  font-space bg-bluebg  py-3 mt-5 text-lg font-medium  ">Continue to Transfer </button>
          
            </Link>  
              
          </section>
            
        </div>
      </form>
    </div>
  );
}
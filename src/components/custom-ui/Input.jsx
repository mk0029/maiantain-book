"use client";
import React, { useState } from "react";
import Icon from "../common/Icon";
import Paragraph from "./Paragraph";

const Input = ({
  onchange,
  id = "common-input",
  placeholder = "Type here",
  value,
  err,
  type = "text",
  errMessage = "",
  className = "",
  variant = "default",
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <>
      {" "}
      <label
        htmlFor={id}
        className={`w-full flex items-center gap-x-1.5 border-[#ADA4A54D] border-solid border rounded-xl px-4 py-3.5 relative ${
          err && "!border-red-400"
        }`}>
        <Icon name={type} />
        {type === "password" && (
          <Icon
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            name={isPasswordVisible ? "opened-eye" : "closed-eye"}
            className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer"
          />
        )}
        <input
          id="id"
          required={false}
          value={value}
          type={isPasswordVisible ? "text" : type}
          placeholder={placeholder}
          onChange={onchange && ((e) => onchange(e))}
          className={`placeholder:text-[#ADA4A5] text-black/80 border-0 outline-none shadow-none text-lg !bg-transparent`}
        />
      </label>
      <Paragraph
        left
        maxSize={14}
        minSize={12}
        responsiveBelow={1440}
        className={`!text-red-400 ml-3 mt-0.5 transition-all duration-100 ease-linear overflow-hidden ${
          err ? "max-h-5" : " max-h-0"
        }`}>
        {errMessage || " Please Fill This Felid"}
      </Paragraph>
    </>
  );
};

export default Input;

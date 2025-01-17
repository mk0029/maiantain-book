"use client";
import React, { useState } from "react";
import ParentCard from "./ParentCard";
import Heading from "../custom-ui/Heading";
import Input from "../custom-ui/Input";
import Cta from "../custom-ui/Cta";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);
      setFormData({ email: "", password: "" });
      setErrors({});
    }
  };

  return (
    <ParentCard>
      <Heading maxSize={24}>Welcome Back! Log In Now</Heading>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onchange={(e) => {
            setErrors({ ...errors, email: "" });
            setFormData({ ...formData, email: e.target.value });
          }}
          err={!!errors.email}
          errMessage={errors.email}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onchange={(e) => {
            setErrors({ ...errors, password: "" });
            setFormData({ ...formData, password: e.target.value });
          }}
          err={!!errors.password}
          errMessage={errors.password}
        />
        <Cta type="submit">Submit</Cta>
      </form>
    </ParentCard>
  );
};

export default Login;

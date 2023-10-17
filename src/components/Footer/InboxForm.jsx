import React from "react";
import { Button, Heading } from "../index";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const InboxForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const emailRegex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;
  const data = (data) => {
    toast.success(`${data.email} registered`);
  };

  return (
    <div className=" flex flex-col justify-between items-center">
      <form onSubmit={handleSubmit(data)}>
        <input
          type="text"
          placeholder="Updates in your inbox…"
          className={`p-2 rounded-3xl mr-2 font-BeVietnamPro text-sm ${
            errors?.email ? " outline-BrightRed border border-BrightRed" : null
          }`}
          {...register("email", {
            required: "email is required",
            pattern: {
              value: emailRegex,
              message: "Please insert a valid email",
            },
          })}
        />
        <Button type="submit">Go</Button>
        {errors?.email ? (
          <p className=" text-BrightRed  font-BeVietnamPro text-xs  mt-1 ml-2">
            {errors.email.message}
          </p>
        ) : null}
      </form>
      <Heading
        textSize=" text-[12px] max-md:text-[12px]"
        color="text-DarkGrayishBlue"
        className="block max-md:hidden"
      >
        Copyright 2020. All Rights Reserved
      </Heading>
    </div>
  );
};

export default InboxForm;

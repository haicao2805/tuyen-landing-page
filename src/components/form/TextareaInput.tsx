import clsx from "clsx";
import * as React from "react";
import { useFormContext } from "react-hook-form";

interface TextareaInputProps
  extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

export const TextareaInput: React.FC<TextareaInputProps> = ({
  name,
  label,
  ...rest
}) => {
  const { register, formState } = useFormContext();

  return (
    <div className="w-full">
      <label htmlFor={name} className="block font-normal font-montserrat text-[16px] leading-[32px] text-[#121212]">
        {label}
      </label>
      <textarea
        {...register(name, { required: `${name} is required` })}
        {...rest}
        id={name}
        className="w-full px-3 py-2 font-normal font-montserrat text-[16px] leading-[32px] text-[#121212] bg-transparent border-b-[3px] box-border border-[#121212] outline-none"
      ></textarea>
      <p className="text-red-500 font-montserrat">
        {formState.errors[name]?.message?.toString()}
      </p>
    </div>
  );
};

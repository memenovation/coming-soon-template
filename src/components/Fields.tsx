export const Input = ({
  label,
  register,
  name,
  options,
  placeholder,
  type = null,
}) => {
  return (
    <div className="text-left">
      <label htmlFor="first-name" className="block text-md text-gray-100 pb-1">
        {label}
      </label>
      <div className="mt-1 sm:mt-0 sm:col-span-2">
        <input
          {...register(name, { ...options })}
          type={type || "text"}
          name={name}
          id={name}
          autoComplete="null"
          placeholder={placeholder}
          className=" w-full py-3 outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-base text-gray-800 rounded-sm pl-3 bg-gray-50 placeholder-gray-500"
        />
      </div>
    </div>
  );
};

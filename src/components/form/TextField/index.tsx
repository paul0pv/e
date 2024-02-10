interface ITextField {
  entry: string;
  options: Array<object>;
  placeholder:string;
  type:string;
  autocomplete?: boolean;
  name: string;
  value?: string;
  required?: boolean;
  register: any;
  errors?: string;
}


export default function TextField({
  entry,
  options,
  placeholder,
  type,
  autocomplete,
  name,
  value,
  required = false,
  register,
  errors,
}: ITextField) {

  const requirements = (required: boolean) => {
    if (required) return ({
      required: {
        value: true,
        message: "Es requerido",
      }
    }
    )
    return null
  }


  return (
    <div className="grid">
      {entry == "input" && (
        <input
          type={type}
          name={name}
          value={value}
          aria-label={name}
          className={type === "file" ? "file-input file-input-bordered w-40 md:w-[80%] max-w-xs ml-20" : ": input input-bordered rounded-box w-40 my-auto md:w-48"}
          autoComplete={autocomplete}
          placeholder={placeholder}
          required={required}
          {...register(name, requirements)}
        />
      )}
      {entry == "textarea" && (
        <textarea
          type={type}
          name={name}
          value={value}
          aria-label={name}
          className={"input input-bordered rounded-box w-40 my-auto md:w-48"}
          autoComplete={autocomplete}
          placeholder={placeholder}
          required={required}
          {...register(name, requirements)}
        />
      )}
      {entry == "select" && (
        <select
          className="select select-bordered w-40 my-auto md:w-48"
          placeholder={name}
          value={value}
          required={required}
          {...register(name, requirements)}
        >
          {options.map((option: any) => (
            <option key={option.id} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
import { useForm } from "react-hook-form";
import TextField from "../TextField";

interface IFormStructure {
  inputs: Array<any>;
  options?: any;
  submitButton: string;
  formRequest: (arg: any)=> void
}

export default function Form({ inputs, options, submitButton, formRequest }:IFormStructure) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();


  const onSubmit = handleSubmit(() => {
    const values = watch();
    formRequest(values)
    reset()
  });

  return (
    <form className="grid gap-4 m-auto p-4 md:w-[80%] h-[90%]" onSubmit={onSubmit}>

        {inputs.map((input) => (
          <div key={input.name} className="flex justify-between gap-2">
            <span className="text-left break-words overflow-hidden my-auto">
              {input.placeholder}:
            </span>
            <TextField
            entry={input.entry}
            options={options}
            placeholder={input.placeholder}
            name={input.name}
            type={input.type ?? "text"}
            autocomplete={input.autocomplete}
            required={input.required}
            register={register}
            errors={input.errors}
            />
          </div>
        ))}

        <button
          type="submit"
          value="submit"
          className="btn glass w-60 py-2 mt-5 mx-auto font-semibold rounded-box"
        >
          {submitButton}
        </button>
      </form>
  );
}

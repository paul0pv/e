import { inputs } from "./form";
import { Form } from "../../components";
import { postRequest } from "../../services";
import { useNavigate } from "react-router-dom";
import { newUser } from "../../utils";

export default function SignUp() {
  const navigate = useNavigate()

  const signup = async (values: any) => {
    const validation = await postRequest({ body: { email: values.email }, url: "users/check-if-available-email" });
    if (!validation.ok) {
      await newUser(values);
      console.log("El usuario se ha creado correctamente")
      navigate("/login");
    } else {
      console.log("El correo ya existe");
    }
  }

  return (
    <div className="grid mx-auto mt-16 md:w-[40%] xl:mt-20 xl:w-[30%]">
      <Form inputs={inputs} submitButton="Sign up" formRequest={signup} />
    </div>
  );
}

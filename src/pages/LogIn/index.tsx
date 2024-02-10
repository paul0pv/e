
import { useNavigate } from "react-router-dom";
import { Form } from "../../components";
import { userStore } from "../../store";
import { findUser } from "../../utils";
import { inputs }  from "./form";


export default function LogIn() {

  const navigate = useNavigate()
  const user = userStore(state => state.saveUser)

  const signin = async (values:any) => {
    const validation = await findUser(values)
    if (validation) {
      user(values)
      navigate("/dashboard")
    } else {
      console.log("Email o contraseña incorrecta")
    }
  }

  return (
    <div className="grid mx-auto mt-28 md:w-[40%] xl:w-[30%]">
        <Form inputs={inputs} submitButton="Sign in" formRequest={signin}/>
      </div>
  );
}

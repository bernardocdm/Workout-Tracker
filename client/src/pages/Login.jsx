import { useState } from "react";
import { login } from "../services/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const result = await login(email, password);
    console.log(result);

    if(result.success) {
      localStorage.setItem("token", result.token);
      console.log("Logado com sucesso")
    } else {
      console.log("Não foi possível logar no momento")
    }

    if (result.success) {
      localStorage.setItem("token", result.token);
      navigate("/home");
    }
  }

  return (
    // flex w-full m-8 items-center justify-center
    
    <div className="flex items-center justify-center h-screen bg-[url('/src/assets/geminiGym.png')]">
        <div className="bg-white p-6 rounded-lg shadow-xl/30 w-96 ">
          <form className="flex flex-col items-center space-y-4" onSubmit={handleSubmit}>
            <h1 className="flex items-center justify-center font-sans font-semibold text-2xl text-black">Welcome Back!</h1>
            <p className="flex items-center justify-center font-sans font-extralight text-xl text-black p-4">To stay connected with us please login in your account</p>
            
            <input 
              value={email} 
              placeholder="E-mail" 
              type="text" 
              className="input" 
              onChange={e => setEmail(e.target.value)} 
              />

            <input 
              type="password" 
              placeholder="Senha" 
              className="input" 
              value={password}
              onChange={e => setPassword(e.target.value)} 
              />

            <button className="btn btn-neutral mx-auto" type="submit">Login</button>

          </form>

          <h1 className="font-sans font-extralight text-xl text-black p-12">Doesn't have an account?
          <a className="no-underline hover:underline" href="SignUp">Create your account here</a> </h1>
        </div>



      </div>
  );
}

export default Login;


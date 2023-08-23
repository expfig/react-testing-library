/**
 * IMPORTS
 */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import { supabase } from "../home/config-supabse";
import { Input } from "../../components/input";

import "./sigin.css";
const SignIn = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [valueName, setValueName] = useState<string | null>(null);
  const [valueJob, setValueJob] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSetNewUser = async () => {
    try {
      setIsLoading(true);
      let { status } = await supabase.from("usuarios").insert({
        name: valueName,
        job: valueJob,
        created_at: new Date(),
      }).single();

      if (status === 201) {
        navigate("/home");
      }
    } catch (error) {
      //tratamento de error
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signin-main">
      <div className="children">
        <h3>Crie seu usuário 🧑‍💼</h3>

        <Input
          type="text"
          id="username"
          autoComplete="off"
          placeholder="Digite seu usário"
          onChange={(event) => setValueName(event.target.value)}
        />

        <Input
          id="job"
          type="text"
          onChange={(event) => setValueJob(event.target.value)}
          placeholder="Digite seu job"
        />

        <div className="wrapper-button">
          {isLoading ? (
            <p>Carregando..</p>
          ) : (
            <Button
              title="Registre"
              disabled={false}
              onClick={() => handleSetNewUser()}
            />
          )}
        </div>
      </div>
    </div>
  );
};
/**
 * EXPORTS
 */
export { SignIn };

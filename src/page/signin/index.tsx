/**
 * IMPORTS
 */
import { useState, useEffect } from "react";
import { Button } from "../../components/button";

interface IUserData {
  id: string;
  name: string;
}
const SignIn = () => {

  const [users, setUsers] = useState<IUserData[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleGetAllUsers = async()=> {
    try {
      const response: IUserData[] = [{id: '1', name: 'Weverson' }, {id: '2', name: 'João Pedro'}];

      if(response){
        setUsers(response);
      }
    } catch (error: any) {
      setErrorMessage(error.message)
    };
  };


  useEffect(()=> {
  handleGetAllUsers()
  }, [])

  return (
    <div>
      <h3>Crie seu usuário</h3>
      <input
        type="text"
        id="username"
        style={styles.input}
        placeholder="Digite seu usário"
      />

      <div style={{ marginTop: 16 }}>
        <Button title="Registre" disabled={false} onClick={() => {}} />
      </div>

      <div>
        <h3>Usuários Cadastrados</h3>
        {users.length > 0 ?
          users.map((user, inde) => (
            <div key={user.id}>
              <div style={{ marginBottom: 28, paddingLeft: 4 }}>
                <p>
                  Nome: <span style={{color: "#6d6d6d"}}>Weverson Luan</span>
                </p>
              </div>
            </div>
          )): <p>{errorMessage ? errorMessage : 'Nenhun registro cadastrado'}!</p>}
      </div>
    </div>
  );
};

const styles = {
  title: {
    color: "#fff",
  },
  button: {
    width: 200,
    background: "blue",
    borderRadius: 6,
    padding: 8,
    border: "1px solid blue",
    cursor: "pointer",
  },
  input: {
    width: 300,
    height: 40,
    border: "1px solid #cdcdcd",
    borderRadius: 6,
    paddingLeft: 16,
  },
};
/**
 * EXPORTS
 */
export { SignIn };

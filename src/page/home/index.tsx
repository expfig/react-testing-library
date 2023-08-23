/**
 * IMPORTS
 */
import React, { useEffect, useState } from "react";
import { CardInfoUsers } from "../../components/card-info-users";
import { supabase } from "./config-supabse";
import { IDataProps } from "../../dtos/users";
import "./home.css";
import { ModalEdit } from "../../components/modal-edit";

const Home = () => {
  const [data, setData] = useState<IDataProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);



  const handleGetUserSupaBase = async () => {
    try {
      let { data, error } = await supabase.from("usuarios").select("*");

      if (data) {
        setData(data);
      }
    } catch (error) {
      //tratamento de error
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetUserSupaBase();
  }, []);
  
  return (
    <div className="home">
      <div className="child">
        <strong style={styles.title}>
          Listagem de usuários cadastrados 👨
        </strong>
      </div>

      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <>
          {data.map((user) => (
            <CardInfoUsers key={user.id} handleGetUsers={()=> {
              setIsLoading(true)
              handleGetUserSupaBase();
            }} data={user} />
          ))}
        </>
      )}


    
    </div>
  );
};

/**
 * EXPORTS
 */
export { Home };

const styles = {
  title: {
    fontSize: 24,
  },
};

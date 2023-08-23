/**
 * IMPORTS
 */
import { useState } from "react";
import { IDataProps } from "../../dtos/users";
import { Trash, Pencil } from "phosphor-react";
import "./card-info.css";
import { ModalEdit } from "../modal-edit";
import { supabase } from "../../page/home/config-supabse";

interface CardInfoUsers {
  data: IDataProps;
  handleGetUsers: () => void;
}

const CardInfoUsers = ({ data, handleGetUsers }: CardInfoUsers) => {
  const [isModal, setIsModal] = useState(false);

  const handleDeleteddUser = async () => {
    try {
      let { status } = await supabase
        .from("usuarios")
        .delete()
        .eq("id", data.id);

      if (status === 204) {
        handleGetUsers();
      }
    } catch (error) {
      //tratamento de error
    } finally {
    }
  };

  
  return (
    <div style={styles.container}>
      <div style={styles.wrapperHeader}>
        <img
          src="https://img.r7.com/images/jovem-investidor-18052021171804596?dimensions=771x420"
          alt="usuário"
          style={styles.image}
        />
        <div style={styles.description}>
          <p style={styles.title}>
            <strong>Nome</strong>: {data.name}
          </p>
          <p>
            <strong>Profissão</strong>: {data.job}
          </p>
        </div>

        <div
          style={{
            width: 80,
            backgroundColor: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingRight: 16,
          }}
        >
          <button className="button" onClick={() => handleDeleteddUser()}>
            <Trash size={24} color="red" />
          </button>

          <button className="button" onClick={() => setIsModal(true)}>
            <Pencil size={24} color="blue" />
          </button>
        </div>
      </div>

      <ModalEdit
        data={data}
        modalIsOpen={isModal}
        closeModal={() => setIsModal(false)}
        afterOpenModal={() => console.log("frhcad")}
        handleGetUsers={handleGetUsers}
      />
    </div>
  );
};

//luan97056799
const styles = {
  container: {
    width: "100%",
    paddingLeft: 16,
    marginTop: 16,
  },
  title: {
    color: "#1e1e1e",
    marginBottom: -10,
  },
  wrapperHeader: {
    width: "50%",
    display: "flex",
    alignItems: "center",
    border: "2px solid #cdcdcd",
    borderRadius: 4,
    paddingLeft: 16,
  },
  description: {
    width: "100%",
    height: 50,
    paddingLeft: 16,
    marginBottom: 36,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  button: {
    width: "100%",
    background: "blue",
    borderRadius: 6,
    padding: 8,
    border: "1px solid blue",
    cursor: "pointer",
  },
};
/**
 * EXPORTS
 */
export { CardInfoUsers };

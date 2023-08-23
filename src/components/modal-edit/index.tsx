/**
 * IMPORTS
 */
import React, { useState } from "react";
import Modal from "react-modal";
import { Input } from "../input";
import { X } from "phosphor-react";
import "./modal-edit.css";
import { Button } from "../button";
import { supabase } from "../../page/home/config-supabse";
import { IDataProps } from "../../dtos/users";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

interface IModalEditProps {
  afterOpenModal: () => void;
  closeModal: () => void;
  modalIsOpen: boolean;
  data: IDataProps;
  handleGetUsers: () => void;
}
const ModalEdit = ({
  afterOpenModal,
  closeModal,
  modalIsOpen,
  data,
  handleGetUsers,
}: IModalEditProps) => {
  const [valueName, setValueName] = useState<string>(data.name);
  const [valueJob, setValueJob] = useState<string>(data.job);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleUpdatedUser = async () => {
    try {
      setIsLoading(true);
      let { status } = await supabase
        .from("usuarios")
        .update({
          name: valueName,
          job: valueJob,
          created_at: new Date(),
        })
        .eq("id", data.id);

      if (status === 204) {
        handleGetUsers();
        closeModal();
      }
    } catch (error) {
      //tratamento de error
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Modal
        ariaHideApp={false}
        contentLabel="Modal Atualizar usuario"
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="header-modal">
          <button onClick={closeModal} className="button-closed">
            <X size={24} color="#cdcdcd" />
          </button>
        </div>
        <p>Atualizar dados do usuário</p>
        <form style={{ marginTop: 16 }} onSubmit={handleUpdatedUser}>
          <Input
            type="text"
            id="username"
            autoComplete="off"
            placeholder="Digite seu usário"
            onChange={(event) => setValueName(event.target.value)}
            value={valueName}
          />

          <Input
            id="job"
            type="text"
            placeholder="Digite seu job"
            onChange={(event) => setValueJob(event.target.value)}
            value={valueJob}
          />
          <Button
            title="Salvar dados"
            isLoading={isLoading}
            disabled={isLoading}
            onClick={() => handleUpdatedUser()}
          />
        </form>
      </Modal>
    </div>
  );
};

/**
 * EXPORTS
 */
export { ModalEdit };

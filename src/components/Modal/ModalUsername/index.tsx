import * as S from "./styles";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { ModalProps } from "../../../utils/@types";
import TextInput from "../../Inputs/TextInput";

import { Button } from "../../Button";
import { colors } from "../../../utils/colors";
import { changeUser } from "../../../redux/userName/actions";
import { toastMessage } from "../../../utils/toastMessage";
export const ModalUserName = ({ isOpen, onRequestClose }: ModalProps) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const modalFirstUserImage =
    "https://i.ibb.co/gSfb59Y/modal-First-User-Image.png";

  const handleTest = () => {
    if (name.length <= 15 && name.length > 3) {
      dispatch(changeUser(name));
      toastMessage({ message: `Bem vindo(a) ${name}`, type: "success" });
      onRequestClose();
    } else {
      toastMessage({
        message: "Porfavor, entre três e quinze caracteres",
        type: "error",
      });
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <S.Container>
        <img src={modalFirstUserImage} alt="Imagem de boas vindas" />
        <p>
          Bem vindo, é com muita alegria que expressamos a felicidade de ter
          você aqui, porfavor, <strong>digite o seu nome</strong> abaixo e{" "}
          <strong>leia as regras</strong>
        </p>
        <TextInput
          label=""
          type="text"
          placeholder="Digite o seu nome!"
          onChange={(e) => setName(e.target.value)}
        />
        <Button background={colors.valid[0]} onClick={handleTest}>
          Confirmar
        </Button>
      </S.Container>
    </Modal>
  );
};

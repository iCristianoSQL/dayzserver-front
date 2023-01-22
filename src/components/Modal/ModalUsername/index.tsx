import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { ModalProps } from "../../../utils/@types";
import TextInput from "../../Inputs/TextInput";
import modalFirstUserImage from "../../../assets/images/modalFirstUserImage.png";

import * as S from "./styles";

export const ModalUserName = ({ isOpen, onRequestClose }: ModalProps) => {
  const dispatch = useDispatch();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
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
        <TextInput label="" type="text" placeholder="Digite o seu nome!" />
      </S.Container>
    </Modal>
  );
};

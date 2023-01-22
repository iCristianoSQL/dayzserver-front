import { InitialInfos, ModalUserName } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { changeUser } from "../../redux/userSlice";
import { useState } from "react";

export function Home() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const { userName } = useSelector((state: any) => state.user);
  console.log(userName);
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };

  const handleTest = () => {
    dispatch(changeUser(name));
  };

  return (
    <main>
      <InitialInfos />
      <p>{(!!userName && userName) || "Testando"}</p>
      <iframe
        src="https://xat.com/embed/chat.php#id=220519996&gn=BMGServer"
        width="540"
        height="405"
        scrolling="no"
      ></iframe>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button type="submit" onClick={handleTest}>
        sunmit
      </button>
      <ModalUserName isOpen={open} onRequestClose={handleClose} />
    </main>
  );
}

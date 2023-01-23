import { Footer, InitialInfos, ModalUserName } from "../../components";
import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";

export function Home() {
  const [open, setOpen] = useState(false);
  const { userName } = useSelector((state: any) => state.user);

  useEffect(() => {
    if (!!!userName) {
      setOpen(true);
    }
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <main>
      <InitialInfos />
      <iframe
        src="https://xat.com/embed/chat.php#id=220519996&gn=BMGServer"
        width="540"
        height="405"
        scrolling="no"
      ></iframe>
      <Footer />
      <ModalUserName isOpen={open} onRequestClose={handleClose} />
    </main>
  );
}

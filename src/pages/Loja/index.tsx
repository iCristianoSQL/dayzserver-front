import withLayout from "../../hocs";

function LojaPage() {
  return (
    <iframe
      src="https://xat.com/embed/chat.php#id=220519996&gn=BMGServer"
      width="540"
      height="405"
      scrolling="no"
    ></iframe>
  );
}

export default withLayout(LojaPage);

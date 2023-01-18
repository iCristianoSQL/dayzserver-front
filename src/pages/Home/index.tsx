import { toastMessage } from "../../utils/toastMessage";

  export function Home() {
    return (
        <div onClick={() => toastMessage({message: 'oiii', type: 'error'})}>hello world</div>
    )
}
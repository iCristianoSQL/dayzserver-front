export interface Toast {
    message: string;
    type: 'success' | 'error';
}

export interface ModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}
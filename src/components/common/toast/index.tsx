import { Toast, ToastBody } from "reactstrap";

interface props {
    isOpen: boolean;
    message: string;
    color: string;
}

const ToastComponent = function ({ isOpen, message, color }: props) {
    return (
        <>
            <Toast
                className={`${color} text-white position-fixed top-0 start-50 translate-middle-x mt-3`}
                isOpen={isOpen}
            >
                <ToastBody className="text-center">{message}</ToastBody>
            </Toast>
        </>

    );
};

export default ToastComponent;
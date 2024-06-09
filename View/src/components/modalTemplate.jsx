
const Modal = ({ isOpen, onClose, title, children, footer }) => {
// 

if(!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white p-6 rounded-lg z-10 relative w-11/12 max-w-lg mx-auto shadow">
        <button onClick={onClose}
        className="absolute p-1 text-4xl font-bold text-grey hover:text-red hover:border-black border-5 border-solid top-0 right-1 text-black"
        >
          &times;
        </button>
        {title && <p className="my-4 text-xl font-semibold">{title}</p>}
        <div className="mb-4">{children}</div>
        {footer && <p className="mt-4">{footer}</p>}
      </div>
    </div>
  );
};

export default Modal;

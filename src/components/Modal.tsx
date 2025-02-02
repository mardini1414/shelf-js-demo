import { X } from 'lucide-react';
import { useEffect, useState } from 'react';

type ModalProps = {
  title: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ title, open, onClose, children }: ModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(open);

  useEffect(() => {
    if (open) {
      setShouldRender(true);
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
      setTimeout(() => setShouldRender(false), 300);
    }
  }, [open]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed z-10 inset-0 flex items-center justify-center bg-black/70 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white min-w-100 rounded-sm p-3 transform transition-all duration-300 ease-out ${
          isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'
        }`}
      >
        <header className="pb-3 mb-3 border-b border-gray-500/50 flex justify-between items-center">
          <h2 className="font-semibold">{title}</h2>
          <div className="cursor-pointer" onClick={onClose}>
            <X size={20} />
          </div>
        </header>
        <div>{children}</div>
      </div>
    </div>
  );
}

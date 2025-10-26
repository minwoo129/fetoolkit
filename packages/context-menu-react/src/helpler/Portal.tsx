import ReactDOM from 'react-dom';

export const ContextMenuPortal = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const el = document.getElementById('fetoolkit-context-menu')!;
  return ReactDOM.createPortal(children, el);
};

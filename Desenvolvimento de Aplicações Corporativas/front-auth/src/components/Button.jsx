// Componente de botão genérico e reutilizável
export default function Button({
  type = "button",
  onClick,
  children,
  disabled,
}) {
  return (
    <button type={type} onClick={onClick} disabled={disabled} className="btn">
      {children} {/* O texto ou ícone do botão vem como filho */}
    </button>
  );
}

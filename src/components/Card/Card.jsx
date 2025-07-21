
function Card({ title = "Entradas", icon, amount, bgColor, textColor  }) {
  return (
    <div className={`rounded p-6 flex flex-col gap-2 shadow-md ${bgColor} ${textColor}`}>
      <div className="flex justify-between items-center">
        <span>{title}</span>
        {icon}
      </div>
      <strong className="text-3xl font-medium mt-1">{amount.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</strong>
    </div>
  );
}

export default Card;

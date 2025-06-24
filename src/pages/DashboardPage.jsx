import {
  ArrowCircleDown,
  ArrowCircleUp,
  Car,
  CurrencyDollar,
  TrashSimple,
} from "phosphor-react";
import Modal from "../components/Modal/Modal";
import { useState } from "react";
import Card from "../components/Card/Card";

function DashbordPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="w-full bg-pink-700 py-6 pb-32 md:px-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-xl md:text-2xl font-bold">
            digital money
          </h1>
          <button
            onClick={() => setOpen(true)}
            className="bg-white/20 px-12 rounded py-2 hover:bg-white/30 text-white border-0 cursor-pointer"
          >
            Nova transação
          </button>
        </div>
      </header>
      <main className="flex-1 container mx-auto py-8 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 -mt-24">
         
         <Card title="Entradas" icon={<ArrowCircleUp className="text-green-500" size={32} />} amount="R$ 0,00" bgColor="bg-white"/>
         <Card title="Saídas" icon={<ArrowCircleDown className="text-red-500" size={32} />} amount="R$ 0,00" bgColor="bg-white"/>
         <Card title="Total" icon={<CurrencyDollar  size={32} />} amount="R$ 0,00" bgColor="bg-emerald-500" textColor="text-white"/>
         

          
          
        </div>

        <div className="overflow-x-auto mt-8">
          {/* Tabelas */}
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-500">
                <th className="px-6 py-3 pb-4 font-medium">Título</th>
                <th className="px-6 py-3 pb-4 font-medium">Valor</th>
                <th className="px-6 py-3 pb-4 font-medium">Categoria</th>
                <th className="px-6 py-3 pb-4 font-medium">Data</th>
                <th className="px-6 py-3 pb-4 font-medium">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50 bg-white">
                <td className="px-6 py-4">Exemplo 1</td>
                <td className="px-6 py-4 text-green-500 font-medium">
                  R$ 1.000,00
                </td>
                <td className="px-6 py-4">Teste</td>
                <td className="px-6 py-4">23/06/2025</td>
                <td className="px-6 py-4">
                  <button className="text-blue-500 hover:text-blue-700">
                    <TrashSimple
                      size={24}
                      weight="fill"
                      className="text-red-500"
                    />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

      <Modal open={open} setOpen={setOpen} />
    </div>
  );
}

export default DashbordPage;
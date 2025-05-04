export default function EspecificPhotoF() {
  return (
    <div
      id="myModal"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 "
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <h2 className="text-xl font-bold mb-4">Título do Modal</h2>
        <p className="text-gray-700 mb-4">
          Este é um exemplo de modal com Tailwind que fica sobre os elementos da
          tela.
        </p>
      </div>
    </div>
  );
}

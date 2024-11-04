const Formulario = () => {
    return (
      <form className="p-6 bg-gray-700">
        <h3 className="text-white text-xl mb-4">Envie sua pergunta ou sugestão</h3>
        <input type="text" placeholder="Nome" className="bg-gray-500 p-2 mb-4 w-full rounded-lg" />
        <textarea placeholder="Mensagem" className="bg-gray-500 p-2 mb-4 w-full rounded-lg"></textarea>
        <button type="submit" className="bg-blue-500 text-white rounded-md p-2">Enviar</button>
      </form>
    );
  };
  export default Formulario;
  
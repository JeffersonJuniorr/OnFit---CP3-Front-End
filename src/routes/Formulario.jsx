const Formulario = () => {
    return (
      <form className="p-6 bg-gray-200">
        <h3 className="text-xl mb-4">Envie sua pergunta ou sugestão</h3>
        <input type="text" placeholder="Nome" className="p-2 mb-4 w-full" />
        <textarea placeholder="Mensagem" className="p-2 mb-4 w-full"></textarea>
        <button type="submit" className="bg-blue-500 text-white p-2">Enviar</button>
      </form>
    );
  };
  export default Formulario;
  
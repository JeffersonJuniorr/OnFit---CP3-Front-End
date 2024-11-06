const Formulario = () => {
  return (
      <div className="bg-gray-800 w-full min-h-screen flex items-center justify-center p-6">
          <form className="bg-gray-700 p-8 rounded-lg space-y-6 shadow-lg max-w-lg w-full">
              <h3 className="text-white text-2xl font-semibold mb-6 text-center">Envie sua pergunta ou sugestão</h3>
              
              <input 
                  type="text" 
                  placeholder="Nome" 
                  className="bg-gray-600 text-white placeholder-gray-400 p-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              />
              
              <textarea 
                  placeholder="Mensagem" 
                  rows="6" 
                  className="bg-gray-600 text-white placeholder-gray-400 p-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              ></textarea>
              
              <button 
                  type="submit" 
                  className="bg-blue-600 text-white font-semibold w-full rounded-lg p-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              >
                  Enviar
              </button>
          </form>
      </div>
  );
};

export default Formulario;


  
function Home() {
  return (
    <>
      <div className="bg-indigo-900 flex justify-center w-full py-20">
        <div className="container grid grid-cols-1 lg:grid-cols-2 text-white items-center gap-8">
          <div className="flex flex-col gap-4 items-start justify-center">
            <h2 className="text-5xl font-bold">Seja Bem Vinde!</h2>
            <p className="text-xl">Expresse aqui seus pensamentos e opniões</p>

            <div className="flex justify-start gap-4">
              <button
                className="rounded text-white 
                                            border-white border-solid border-2 py-2 px-4 cursor-pointer hover:bg-white hover:text-indigo-900 transition"
              >
                Nova Postagem
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <img
              src="https://i.imgur.com/fyfri1v.png"
              alt="Imagem Página Home"
              className="w-2/3"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

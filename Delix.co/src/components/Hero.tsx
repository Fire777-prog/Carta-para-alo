function Hero() {
  return (
    <section className="bg-yellow-50 py-20">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center">

        <div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            ✨ Bienvenido a
            <span className="text-yellow-500"> Delix.co</span>
          </h1>


          <h2 className="mt-8 text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Todo para tu escuela,
            <br />
            oficina y creatividad.
          </h2>


          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Encuentra útiles escolares, artículos de oficina,
            materiales para arte, mochilas y mucho más con la mejor calidad.
          </p>


          <button className="mt-8 rounded-xl bg-yellow-400 px-8 py-3 font-semibold text-gray-900 hover:bg-yellow-500 transition">
            Explorar productos
          </button>

        </div>


        <div className="hidden md:flex justify-center">
          <div className="h-72 w-72 rounded-3xl bg-yellow-300 flex items-center justify-center text-8xl shadow-lg">
            📚
          </div>
        </div>


      </div>
    </section>
  );
}

export default Hero;
function Hero() {
  return (
    <section className="bg-gradient-to-r from-yellow-400 to-yellow-300">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-20 text-center">

        <span className="mb-4 rounded-full bg-white px-4 py-2 font-semibold text-yellow-600 shadow">
          ✨ Bienvenido a Delix.co
        </span>

        <h1 className="max-w-3xl text-5xl font-extrabold leading-tight text-gray-900">
          Todo para tu escuela,
          <br />
          oficina y creatividad.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-700">
          Encuentra útiles escolares, artículos de oficina, materiales para arte,
          mochilas y mucho más con la mejor calidad.
        </p>

        <button className="mt-10 rounded-xl bg-blue-600 px-8 py-4 text-lg font-bold text-white transition hover:bg-blue-700">
          Explorar productos
        </button>

      </div>
    </section>
  );
}

export default Hero;
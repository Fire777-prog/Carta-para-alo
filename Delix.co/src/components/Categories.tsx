const categories = [
  { emoji: "📚", title: "Escolar" },
  { emoji: "🖊️", title: "Oficina" },
  { emoji: "🎨", title: "Arte" },
  { emoji: "🎒", title: "Mochilas" },
];

function Categories() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-extrabold text-gray-800">
          Explora nuestras categorías
        </h2>

        <p className="mt-3 text-center text-gray-500">
          Encuentra rápidamente lo que necesitas.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <button
              key={category.title}
              className="rounded-3xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="text-6xl">{category.emoji}</div>

              <h3 className="mt-5 text-xl font-bold">
                {category.title}
              </h3>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
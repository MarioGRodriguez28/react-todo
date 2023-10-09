const App = () => {
  return (
    <>
      <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
        <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="uppercase text-xl font-bold tracking-[0.3em] text-white ">Todo</h1>
          <button>luna</button>
        </div>
          <form className="bg-white rounded-md overflow-hidden py-2">
            <input type="text" placeholder="Create a new TODO" />
          </form>
        </header>
        <main className="container mx-auto px-4">
          <article>
            <button>circulo</button>
            <p>A new TODO</p>
            <button>X</button>
          </article>
          <article>
            <button>circulo</button>
            <p>A new TODO</p>
            <button>X</button>
          </article>
          <article>
            <button>circulo</button>
            <p>A new TODO</p>
            <button>X</button>
          </article>

          <section>
            <span>5 Item left</span>
            <button>Clear Completed</button>
          </section>
        </main>

        <section className="px-4 container mx-auto">
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </section>
        <section  className="text-center">Drag and  Drop</section>
      </div>
    </>
  );
};
export default App;

function Hero() {
  return (
    <section className="bg-blue-600 text-white min-h-[80vh] flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-6xl font-bold">
        Smarter Computer-Based Testing
      </h1>

      <p className="mt-6 text-xl max-w-2xl">
        ProCBT helps schools, universities and organizations conduct secure,
        fast and reliable online examinations.
      </p>

      <div className="mt-10 flex gap-4">
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold">
          Get Started
        </button>

        <button className="border border-white px-6 py-3 rounded-lg">
          Admin Login
        </button>
      </div>
    </section>
  );
}

export default Hero;
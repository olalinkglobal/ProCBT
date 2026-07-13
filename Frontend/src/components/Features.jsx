function Features() {
  const features = [
    "Timed Exams",
    "Automatic Grading",
    "Student Dashboard",
    "Admin Dashboard",
    "Secure Login",
    "Instant Results",
  ];

  return (
    <section className="py-20 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12">
        Why Choose ProCBT?
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {features.map((feature) => (
          <div
            key={feature}
            className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold">{feature}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
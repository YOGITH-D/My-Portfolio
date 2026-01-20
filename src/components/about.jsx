function About() {
  return (
    <section id="about" className="py-24">
      <div className="px-24 text-white max-w-6xl mx-auto">
        
        {/* Heading */}
        <p className="text-5xl font-semibold underline underline-offset-[14px] mb-10">
          About Me
        </p>

        {/* Content card */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-10 shadow-lg border border-white/10">
          <p className="font-medium text-xl leading-relaxed text-gray-200">
            I’m an <span className="text-purple-400 font-semibold">Artificial Intelligence and Data Science</span> student
            with a strong interest in <span className="text-purple-400">machine learning</span> and
            <span className="text-purple-400"> modern web development</span>.
            <br /><br />
            I enjoy building <span className="font-semibold">data driven, user focused applications</span> that solve
            real world problems, combining analytical thinking with clean and scalable design.
            <br /><br />
            Driven by curiosity and continuous learning, I aim to create technology that delivers
            <span className="font-semibold"> meaningful and practical impact</span>.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;

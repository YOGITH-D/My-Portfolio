function Footer() {
  return (
    <footer id="contact" className="w-full bg-black text-white px-10 py-16">
      
      
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6 underline underline-offset-8">
          Contact
        </h2>

        <p className="text-gray-400 mb-8">
          Feel free to reach out for collaborations or just a friendly hello 👋
        </p>

        <div className="flex justify-center gap-8 text-lg">
         <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=yogithgowdad5@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition">
          Email
        </a>
          <a
            href="https://github.com/YOGITH-D"
            target="_blank"
            className="hover:text-purple-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/yogith-gowda-080600293/"
            target="_blank"
            className="hover:text-purple-400 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>

      
      <div className="w-full h-[1px] bg-gray-700 my-12"></div>

      
      <div className="text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Yogith D. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;

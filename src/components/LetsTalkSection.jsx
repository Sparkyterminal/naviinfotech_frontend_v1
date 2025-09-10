export default function LetsTalkSection() {
  return (
    <section className="bg-black text-gray-300 px-6 pb-7 w-full">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-center tracking-tight">
          Let's Talk
        </h2>

        <div className="w-20 h-1 bg-gray-600 mx-auto mb-8 rounded-full"></div>

        <p className="text-xl text-gray-300 mb-12 text-center max-w-4xl mx-auto leading-relaxed font-light">
          Got an idea? A dream project? Or just want to say hi?
          <br />
          <span className="text-gray-400 text-lg">
            We'd love to hear about your project. Whether you're starting fresh
            or need a redesign, our team is ready to help.
          </span>
        </p>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16">
          <div className="flex items-center space-x-4">
            <div className="text-2xl">📧</div>
            <a
              href="mailto:sangeetha.m@naviinfo.tech"
              className="text-gray-300 hover:text-white font-medium text-lg"
            >
              sangeetha.m@naviinfo.tech
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-2xl">📞</div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 font-medium text-lg">
              <a
                href="tel:+917019852129"
                className="text-gray-300 hover:text-white"
              >
                +91-70198 52129
              </a>
              {/* <span className="text-gray-600 hidden sm:block">/</span>
              <a
                href="tel:+917349150972"
                className="text-gray-300 hover:text-white"
              >
                +91-7349150972
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

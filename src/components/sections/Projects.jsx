import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
    return <section id="projects" className="min-h-screen flex items-center justify-center py20">
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> Featured Projects </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* -----------------------copy from here--------------------- */}
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2 "> E-Commerce Platform</h3>
                    <p className="text-gray-400 mb-4">
                        Developed a responsive and interactive e-commerce website using core web technologies, where i implemented dynamic functionalities such as a shopping cart, product filtering, user authentication, leveraged localstorage to persist user cart data and interactive UI elements entirely on the client side.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["JavaScript", "HTML", "CSS"].map((tech, key) => (
                            <span key={tech} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="https://click-kart-xi.vercel.app/" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project → (https://click-kart-xi.vercel.app/)</a>
                    </div>

                </div>
                {/* -----------------------to here--------------------- */}
                {/* -----------------------copy from here--------------------- */}
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2 "> AI Workout Assistant </h3>
                    <p className="text-gray-400 mb-4">
                        Developed an web application to help everyone do workout wherever and whenever. Supported by the pose detector feature to analyze every pose and auto count the number of repetitions made.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["React", "JavaScript", "HTML", "CSS"].map((tech, key) => (
                            <span key={tech} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="https://ai-gym-workout.vercel.app/" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project → (https://ai-gym-workout.vercel.app/)</a>
                    </div>

                </div>
                {/* -----------------------to here--------------------- */}
                {/* -----------------------copy from here--------------------- */}
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2 "> Notes </h3>
                    <p className="text-gray-400 mb-4">
                         Developed a simple and intuitive notes app using JavaScript, allowing users to create, edit, and delete notes with a clean and responsive UI. The app leverages local storage for persistent data and provides a seamless experience for organizing personal information and quick reminders. </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["JavaScript", "HTML", "CSS"].map((tech, key) => (
                            <span key={tech} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="https://notes-app-vert-three.vercel.app/" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project → (https://notes-app-vert-three.vercel.app/)</a>
                    </div>

                </div>
                {/* -----------------------to here--------------------- */}
                {/* -----------------------copy from here--------------------- */}
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2 "> ShopIt </h3>
                    <p className="text-gray-400 mb-4">
                         Designed and developed a fully responsive e-commerce website offering a wide range of products including electronics, clothing, footwear, and groceries. </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["HTML", "CSS", "BootStrap"].map((tech, key) => (
                            <span key={tech} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="https://shopit-silk.vercel.app/" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project → (https://shopit-silk.vercel.app/)</a>
                    </div>

                </div>
                {/* -----------------------to here--------------------- */}
            </div>

        </div>
        </RevealOnScroll>
    </section>
}

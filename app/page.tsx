import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import * as fonts from "./fonts";
import { FaLocationDot } from "react-icons/fa6";
import { SkillsContent, ProjectsContent } from "./components/Slider.jsx";
import { IoIosCodeWorking } from "react-icons/io";
import { FolderKanban } from "lucide-react";

export default function Home() {
	return (
		<div className="flex flex-col items-center px-6 scroll-smooth">
			<div
				className="w-screen h-screen transition-colors duration-500 fixed top-0 left-0 pointer-events-none z-0"
				style={{
					background: `radial-gradient(
						circle at 0px 0px,
						hsl(0, 0%,100%,0.2) 0%,
						transparent 0%
						)`,
				}}
			></div>

			<section className="mt-24 flex justify-center rounded-3xl">
				<div className="w-full max-w-3xl rounded-2xl bg-background/40 p-6 flex flex-col gap-4">
					<div className="flex items-start justify-between gap-4">
						<div>
							<h1
								className={`text-2xl md:text-[2rem] font-bold ${fonts.lilitaOne.className} font-lilita`}
							>
								Ritesh Kharal
							</h1>

							<div className="mt-2 flex items-center gap-2 text-muted-foreground text-l font-normal">
								<span className="text-[1.01rem]">
									<FaLocationDot />
								</span>
								<span className={`text-[1.01rem] ${fonts.geistMono.className}`}>
									Lumbini, Nepal
								</span>
							</div>
						</div>

						{/* <div className="flex gap-3">
              <a
                href="mailto:kharalritesh@email.com"
                className="h-10 w-10 rounded-lg border border-border flex items-center justify-center hover:bg-accent transition-all hover:text-xl"
              >
                <IoIosMail className="transition-all"/>
              </a>
              <a
                href="https://github.com/RiteshKharal"
                target="_blank"
                className="h-10 w-10 rounded-lg border border-border flex items-center justify-center hover:bg-accent transition hover:text-xl"
              >
                <FaGithub className="transition-all" />
              </a>
              <a
                href="https://www.linkedin.com/in/ritesh-kharal-1a8269377/"
                target="_blank"
                className="h-10 w-10 rounded-lg border border-border flex items-center justify-center hover:bg-accent transition hover:text-xl"
              >
                <FaLinkedin className="transition-all" />
              </a>
            </div> */}
					</div>

					<p
						className={`text-base md:text-lg leading-relaxed text-foreground/90 ${fonts.comfortaa.className}`}
					>
						I am a 15-year-old full-stack web developer, Currently learning and
						improving every day.
					</p>
				</div>
			</section>

			<section className="mt-20 w-full max-w-3xl flex flex-col gap-14">
				<div className="w-full rounded-xl flex flex-col gap-6">
					<h2
						className={`text-2xl font-semibold tracking-tight ${fonts.geistMono.className} flex flex-row gap-3`}
					>
						<IoIosCodeWorking />
						Skills
					</h2>

					<SkillsContent />
				</div>

				<div className="w-full rounded-xl p-6 flex flex-col gap-20">
					<h1
						className={`text-2xl font-semibold tracking-tight flex flex-row place-items-center-safe gap-3 ${fonts.geistMono.className}`}
					>
						<FolderKanban /> Projects
					</h1>

					<div className="">
						<ProjectsContent />
					</div>
				</div>
			</section>

			<section
				className="
                fixed bottom-5 right-5
                flex flex-col gap-2
                font-bold text-30
                z-50 hover:text-[1.15rem]
              "
			>
				<a
					href="https://www.linkedin.com/in/ritesh-kharal-1a8269377/"
					target="_blank"
					className="
                bg-background
                  shadow-2xl p-3 rounded-full
                  hover:bg-[#0A66C2] hover:text-white
                  transition-all
                   hover:drop-shadow-[0_0_21px_#0A66C2]
                "
				>
					<FaLinkedin />
				</a>

				<a
					href="mailto:kharalritesh@gmail.com"
					target="_blank"
					className="
                  bg-background p-3 rounded-full
                  hover:bg-[#D14836] hover:text-white
                  hover:drop-shadow-[0_0_21px_red]
                  transition-all
                "
				>
					<IoIosMail />
				</a>

				<a
					href="https://github.com/RiteshKharal"
					target="_blank"
					className="
                  bg-background p-3 rounded-full
                  hover:bg-[#6ec497] hover:text-white
                  transition-all
                  hover:drop-shadow-[0_0_21px_#6ec497]
                "
				>
					<FaGithub />
				</a>
			</section>

			<footer className="mt-24 py-8 flex flex-col items-center gap-6 text-xs tracking-wide text-foreground/60">
				<p className="uppercase letter-spacing-wide">
					© {new Date().getFullYear()} Ritesh Kharal
				</p>

				<div className="flex items-center gap-6 text-lg">
					<a
						href="https://www.linkedin.com/in/ritesh-kharal-1a8269377/"
						target="_blank"
						className="transition duration-300 hover:text-[#0A66C2] hover:-translate-y-1"
					>
						<FaLinkedin />
					</a>

					<a
						href="mailto:kharalritesh@gmail.com"
						target="_blank"
						className="transition duration-300 hover:text-[#D14836] hover:-translate-y-1"
					>
						<IoIosMail />
					</a>

					<a
						href="https://github.com/RiteshKharal"
						target="_blank"
						className="transition duration-300 hover:text-[#6ec497] hover:-translate-y-1"
					>
						<FaGithub />
					</a>
				</div>
			</footer>
		</div>
	);
}

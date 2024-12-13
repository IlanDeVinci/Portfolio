const Contact = () => {
	return (
		<div
			className="px-6 w-4/5 mx-auto md:my-12"
			id="contact">
			<div className="grid md:grid-cols-2 place-items-center">
				<div>
					<div className=" text-[var(--text)] my-3">
						<h3 className=" text-4xl font-semibold mb-5">
							About <span>Me</span>
						</h3>
						<p className=" text-justify leading-7  w-11/12 mx-auto">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
							perspiciatis non et similique! Doloribus quisquam aperiam neque
							velit quos excepturi eveniet animi quod voluptatem nesciunt nisi
							inventore autem consequuntur cumque asperiores accusantium quas
							veritatis esse repudiandae, facilis impedit iste eum voluptatibus.
							Illum at necessitatibus ad quam inventore corrupti perferendis
							molestiae.
						</p>
					</div>
					<div className="flex mt-10 items-center gap-7">
						<div
							className="p-5 rounded-lg transition duration-500"
							style={{ background: "var(--box-bg-dark)" }}>
							<h3 className="md:text-4xl text-2xl font-semibold text-[var(--text)]">
								11 <span>+</span>
							</h3>
							<p className="text-xs md:text-base">
								<span>Projects</span>
							</p>
						</div>
						<div
							className="p-5 rounded-lg transition duration-500"
							style={{ background: "var(--box-bg-dark)" }}>
							<h3 className="md:text-4xl text-2xl font-semibold text-[var(--text)]">
								0 <span>+</span>
							</h3>
							<p className="text-xs md:text-base">
								<span>years of experience</span>
							</p>
						</div>
						<div
							className="p-5 rounded-lg transition duration-500"
							style={{ background: "var(--box-bg-dark)" }}>
							<h3 className="md:text-4xl text-2xl font-semibold text-[var(--text)]">
								30 <span>+</span>
							</h3>
							<p className="text-xs md:text-base">
								<span>happy clients</span>
							</p>
						</div>
					</div>
				</div>
				<div>
					<form
						action="https://getform.io/f/azyypjrb"
						method="POST"
						className="max-w-6xl p-5 md:p-12">
						<p className="text-[var(--text)] font-bold text-xl mb-2">
							Let's connect!
						</p>
						<input
							type="text"
							id="name"
							placeholder="Your Name ..."
							name="name"
							required
							className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4 text-black"
						/>
						<input
							type="email"
							id="email"
							placeholder="Your Email ..."
							name="email"
							required
							className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4 text-black"
						/>
						<textarea
							id="message"
							placeholder="Your Message ..."
							name="message"
							cols={30}
							rows={4}
							required
							className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4 text-black"
						/>
						<button
							type="submit"
							className="w-full bg-primary-color text-[var(--text)] text-xl px-4 py-2 rounded-md">
							Send Message
						</button>
					</form>
				</div>
			</div>{" "}
		</div>
	);
};

export default Contact;

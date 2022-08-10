import React from "react";

const Contact = () => {
	return (
		<div>
			<section class="text-gray-600 body-font relative">
				<div class="container px-5 py-24 mx-auto">
					<div class="flex flex-col text-center w-full mb-12">
						<h1 class="sm:text-3xl text-4xl font-bold font-medium title-font mb-4 text-gray-900">
							Contact Us
						</h1>
						<p class="lg:w-2/3 mx-auto leading-relaxed text-base">
							Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
							gentrify.
						</p>
					</div>
					<div class="lg:w-1/2 md:w-2/3 mx-auto">
						<div class="flex flex-wrap -m-2">
							<div class="p-2 w-1/2">
								<div class="relative">
									<label for="name" class="leading-7 text-sm text-gray-600">
										Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
									/>
								</div>
							</div>
							<div class="p-2 w-1/2">
								<div class="relative">
									<label for="email" class="leading-7 text-sm text-gray-600">
										Email
									</label>
									<input
										type="email"
										id="email"
										name="email"
										class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
									/>
								</div>
							</div>
							<div class="p-2 w-full">
								<div class="relative">
									<label for="message" class="leading-7 text-sm text-gray-600">
										Message
									</label>
									<textarea
										id="message"
										name="message"
										class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
									></textarea>
								</div>
							</div>
							<div class="p-2 w-full">
								<button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
									Submit
								</button>
							</div>
							<div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
								<a class="text-indigo-500">kanakwebdev@gmail.com</a>
								<p class="leading-normal my-5">
									Kanak Chandra
									<br />
									Developer, MN 56301
								</p>
								<span class="inline-flex">
									<a class="text-gray-500">
										<svg
											fill="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											class="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
										</svg>
									</a>
									<a class="ml-4 text-gray-500">
										<svg
											fill="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											class="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
										</svg>
									</a>
									<a class="ml-4 text-gray-500">
										<svg
											fill="none"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											class="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<rect
												width="20"
												height="20"
												x="2"
												y="2"
												rx="5"
												ry="5"
											></rect>
											<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
										</svg>
									</a>

									<a
										href="https://github.com/kanakWeb"
										aria-label="Homepage"
										class="ml-4 text-gray-500"
										title="GitHub"
									>
										<svg
											aria-hidden="true"
											class="octicon octicon-mark-github"
											height="24"
											version="1.1"
											viewBox="0 0 16 16"
											width="24"
										>
											<path
												fill-rule="evenodd"
												d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
											></path>
										</svg>
									</a>
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Contact;

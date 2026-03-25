"use client";

import React, { useEffect, useState } from "react";

export default function MouseGradient() {
	const [mouse, setMouse] = useState({ x: 0, y: 0 });
	const [shape, setShape] = useState([50, 50, 50, 50, 50, 50, 50, 50]);
	const [size, setSize] = useState(30);
	// console.log(document.getElementsByClassName('DotPoss'))

	useEffect(() => {
		Colliding();
	}, [mouse]);

	useEffect(() => {
		const handleMouse = (e: MouseEvent) =>
			setMouse({ x: e.clientX, y: e.clientY });
		window.addEventListener("mousemove", handleMouse);
		return () => window.removeEventListener("mousemove", handleMouse);
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			setShape((prev) =>
				prev.map((val) => {
					let next = val + (Math.random() * 10 - 5);
					if (next > 100) next = 100;
					if (next < 0) next = 0;
					return next;
				}),
			);

			setSize((prev) => {
				let next = prev + Math.random() * 10 - 4;
				if (next > 70) next = 70;
				if (next < 40) next = 40;
				return next;
			});
		}, 200);

		return () => clearInterval(interval);
	}, []);

	const finalShape = `${shape[0]}% ${shape[1]}% ${shape[2]}% ${shape[3]}% / ${shape[4]}% ${shape[5]}% ${shape[6]}% ${shape[7]}%`;
	const followerColor =
		typeof document !== "undefined" &&
		document.documentElement.classList.contains("dark")
			? "hsla(255 100% 100% / 0.37)"
			: "hsla(250 40% 24% / 0.8)";


	return (
		<div className="h-full w-full fixed inset-0 blur-[3.5rem] pointer-events-none transition-all duration-200 z-[-100] ">
			<div
				style={{
					width: size * 2 + "px",
					height: size * 2 + "px",
					borderRadius: finalShape,
					position: "absolute",
					top: mouse.y - size,
					left: mouse.x - size,
					background: `radial-gradient(circle ${size}px at ${size}px ${size}px, ${followerColor} 40%,var(--background) 70%, transparent 90%)`,
				}}
				className="transition-transform z-[-99] MouseFollower"
			/>
		</div>
	);
}

function Colliding() {
	const el1 = Array.from(document.getElementsByClassName("MouseFollower"));
	const el2 = Array.from(document.getElementsByClassName("dots"));

	el2.forEach((element) => {
		el1.forEach((el) => {
			const dot = element as HTMLElement; // This is the dot btw :)
			const follower = el as HTMLElement; // This is the follower btw
			const DotPos = element.getBoundingClientRect();
			const FollowerPos = el.getBoundingClientRect();

			const isColliding = !(
				DotPos.top > FollowerPos.bottom ||
				DotPos.right < FollowerPos.left ||
				DotPos.bottom < FollowerPos.top ||
				DotPos.left > FollowerPos.right
			);

			if (!isColliding) return;

			const dx =
				DotPos.x + DotPos.width / 2 - (FollowerPos.x + FollowerPos.width / 2);
			const dy =
				DotPos.y + DotPos.height / 2 - (FollowerPos.y + FollowerPos.height / 2);

			const distance = Math.sqrt(dx * dx + dy * dy);
			const offset = 40; // how far to move away btw (px)
			const nx = distance === 0 ? 0 : (dx / distance) * offset;
			const ny = distance === 0 ? 0 : (dy / distance) * offset;

			if (isColliding) {
				dot.style.transform = `translate(${nx}px, ${ny}px)`;
			}
			
      if(DotPos.left<10){ dot.style.left= '10px'}
      if(DotPos.right>document.body.scrollWidth){ dot.style.left= `${document.body.scrollWidth - 10}px`}
      if(DotPos.top<0){ dot.style.top= '10px'}
      if(DotPos.bottom>document.body.scrollHeight){ dot.style.bottom = `${document.body.scrollHeight - 10}px`}
		});
	});
}

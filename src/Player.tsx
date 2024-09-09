import React, { useEffect, useRef } from "react";
import rrwebPlayer from "rrweb-player";
import "rrweb-player/dist/style.css";
import { events } from "./components/events";
import { z } from "zod";

export const myCompSchema = z.object({
	titleText: z.string(),
});
export const Player: React.FC = () => {
	const playerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const player1: any = new rrwebPlayer({
			target: playerRef.current!,
			props: {
				events,
			},
		});
		// if (player1) return true;
	}, []);

	return <div ref={playerRef} />;
};

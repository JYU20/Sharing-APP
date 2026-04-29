import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
async function main() {
	const bcryptedPassword = await bcrypt.hash("password", 10);
	const images = [...Array(16)]
		.map((_, i) => i + 1)
		.map((i) => `/dogs/dog_${i}.jpg`);
	const users = [...Array(10)]
		.map((_, i) => i + 1)
		.map((i) => {
			return {
				name: `user+${i}`,
				email: `user+${i}@example.com`,
				password: bcryptedPassword,
				image: images[Math.floor(Math.random() * images.length)],
				description: "こんにちは。よろしくお願いします🐕",
			};
		});

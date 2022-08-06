import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";
import { useRouter } from "next/router";

export default Handler = async (req, res) => {
	const router = useRouter();
	const session = await unstable_getServerSession(req, res, authOptions);
	console.log("restricted");
	if (!session) {
		console.log("restricted ses");
		if (router.pathname === "/profile") {
			console.log("restricted router");
			router.push("/");
		}
	} 
};

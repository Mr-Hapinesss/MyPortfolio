import { Link } from "react-router-dom";

function Footer() {
    return(
        <>
            <div className="bg-gray-400">
                <div className="flex flex-col mx-8" >
                    <h3 className="font-bold text-3x1 text-blue-200 " >Quick links</h3>
                    <Link to={"/"} className="font-bold">Home</Link>
                    <Link to={"/about"} className="font-bold">About</Link>
                    <Link to={"/projects"} className="font-bold">My Projects</Link>
                    <Link to={"/education"} className="font-bold">Education and Experiences</Link>
                    <Link to={"/contact"} className="font-bold">Contact Me</Link>
                </div><hr />
                <div className="flex justify-center mt-10" >
                    <p className="font-bold">&copy; Noordin's Portfolio. All rights reserved.</p>
                </div>
            </div>
        </>
    );
};


export default Footer;
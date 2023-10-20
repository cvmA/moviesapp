import Link from "next/link";

const Header = () => {
    return ( 
        <div className="bg-purple-950 flex justify-between">
            <div className="flex items-center gap-6">
                <h1>
                    <Link href={"/"}>Muvis</Link>
                </h1>
                <div className="flex items-center gap-2">
                    <Link href={"/movies"}>Movies</Link>
                    <Link href={"/tv"}>TV</Link>
                </div>
            </div>
        </div>
     );
}
 
export default Header;
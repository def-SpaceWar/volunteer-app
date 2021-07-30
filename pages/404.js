import NavBar from './navbar'
import Link from "next/link";

export default function Custom404() {
    return (
        <div>
            <NavBar />
        <br />
        <br />
        <br />
        <br />
        <center>
            <h1>404</h1>
            <h3>Oops! Page Not Found :d</h3>
            <Link href="/"><button className='goBackBtn'>Go Back</button></Link>
        </center>
            <style jsx>{`
                h1 {
                    color: #fff;
                    font-size: 175px;
                }
                h3 {
                    color: #fff;
                    font-size: 50px;
                }
                .goBackBtn {
                    background-color: #fe6684;
                    border: 3px solid #fe6684;
                    border-radius: 15px;
                    height: 3rem;
                    width: 9rem;
                    font-size: 19px;
                    padding: 5px;
                    margin-top: 1rem;
                    color: #fff;
                    margin-bottom: 1rem;
                    transition: ease 0.7s;
                }
                
                .goBackBtn:hover{
                    background-color: #fe6684;
                    border: 3px solid #fe6684;
                    border-radius: 7px;
                    height: 3rem;
                    width: 9rem;
                    font-size: 19px;
                    color: #fff;
                    padding: 5px;
                    margin-top: 1rem;
                    margin-bottom: 1rem;
                    transition: ease 0.7s;
                    cursor: pointer;
                }
            `}</style>
        </div>
    )
}
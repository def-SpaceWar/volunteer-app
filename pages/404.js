import NavBar from './navbar'

export default function Custom404() {
    return (
        <div>
            <NavBar />
        <br />
        <br />
        <br />
        <br />
            <h1>404</h1>
            <h3>Page not found.</h3>
            <style jsx>{`
                h1 {
                    padding-left: 50px;
                    color: #f00;
                }
                h3 {
                    padding-left: 50px;
                    color: #fff;
                }
            `}</style>
        </div>
    )
}
import NavBar from './navbar'

export default function Custom500() {
    return (
        <div>
            <NavBar />
        <br />
        <br />
        <br />
        <br />
            <h1>500</h1>
            <h3>Internal Server Error</h3>
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
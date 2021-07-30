import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import {useState, useEffect, useCallback, useRef} from 'react'
import firebase from './firebaseInit';
import LocalStorage from './localStorage'

const db = firebase.firestore()

export default function NavBar() {
    let data;
    const [results, setResults] = useState([]);
    const [dropDown, setDropDown] = useState([]);
    const searchRef = useRef(null)
    const [active, setActive] = useState(false)
    const [localStorage, setLocalStorage] = useState(false);

    useEffect(function () {
        const localStorageInstance = new LocalStorage(window);
        setLocalStorage(localStorageInstance);
        if (localStorageInstance.isLoggedIn()) {
            console.log('Logged In')
        }
    }, []);

    useEffect(() => {
        db.collection("Projects").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                data = doc.data();
                setResults(results => [
                    ...results,
                    {
                        name: data.name,
                        location: data.location,
                        id: doc.id
                    }
                ]);
            });
        });
    }, [])

    function getSearchDropdown(input) {
        const guess = results.filter(post => post.name.toLowerCase().includes(input) || post.location.toLowerCase().includes(input))
        if (guess.length > 5) {
            guess.length = 5;
        }
        setDropDown(guess);
    }

    const onFocus = useCallback(() => {
        setActive(true)
        window.addEventListener('click', onClick)
    }, [])

    const onClick = useCallback((event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
            setActive(false)
            window.removeEventListener('click', onClick)
        }
    }, [])

    return (
        <div className={styles.navContainer}>
            <div className={styles.centerSearch}>
                <form ref={searchRef}>
                    <input list="autoGuess" type="text" placeholder="Search..." onChange={(e) => getSearchDropdown(e.target.value)} onFocus={onFocus} onKeyPress={
                        (e) => {
                            if (e.key == "Enter") {
                                e.preventDefault();
                                const guess = results.filter(post => post.name.toLowerCase().includes(e.target.value) || post.location.toLowerCase().includes(e.target.value))
                                window.location.replace(`/post/${guess[0].id}`)
                            }
                        }
                    } />
                    {active && dropDown.length > 0 && (
                        <ul className={styles.results}>
                            {dropDown.map(({name, id}) => (
                                <li className={styles.result} key={id}>
                                    <Link href="/post/[pid]" as={`/post/${id}`}>
                                        <a>{name}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </form>
            </div>
            <div className={styles.centerLogo}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/hackathon_logo.png"
                        alt="VolunteerUP"
                        width="100%"
                        height="100%"
                    />
                </Link>
            </div>
            <div className={styles.centerLogo}>
                <ui className={styles.navLinks}>
                    {
                        localStorage && !localStorage.isLoggedIn() && (
                            <>
                                <li>
                                    <Link href="/login">
                                        <p className={styles.navItem}>Login</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/signup">
                                        <p className={styles.navItem}>Sign Up</p>
                                    </Link>
                                </li>
                            </>
                        )
                    }
                    {
                        localStorage && localStorage.isLoggedIn() && (
                            <li>
                                <Link href="/joined">  
                                    <p className={styles.navItem}>Joined</p>
                                </Link>
                            </li>
                        )
                    }
                    <li>
                        <Link href="/projects">
                            <p className={styles.navItem}>Projects</p>
                        </Link>
                    </li>
                    {
                        localStorage && localStorage.isLoggedIn() && (
                            <>
                                <li>
                                    <Link href="">  
                                        <p onClick={() => localStorage.setItem("loginInfo", "")} className={styles.navItemLogout}>Logout</p>
                                    </Link>
                                </li>
                                <li className={styles.floatLeft}>
                                    <p className={styles.emailBtn}>{localStorage.getItem('loginEmail')}</p>
                                </li>
                            </>
                        )
                    }
                </ui>
            </div>
        </div>
    );
}

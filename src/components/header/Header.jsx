import headerstyle from "./header.module.css";

export function Header() {
    return (
        <>
            <header className={headerstyle.header}>
                <div className={headerstyle.container}>
                    <a href="#" className={headerstyle.logo}>
                        adamkeyes
                    </a>
                    <nav className={headerstyle.navbar}>
                        <img
                            src="./src/assets/icon/icon1.svg"
                            alt="githup icon"
                        />
                        <img src="./src/assets/icon/icon2.svg" alt="icon" />
                        <img
                            src="./src/assets/icon/icon3.svg"
                            alt="link icon"
                        />
                        <img
                            src="./src/assets/icon/icon4.svg"
                            alt="twitter icon"
                        />
                    </nav>
                </div>
            </header>
        </>
    );
}

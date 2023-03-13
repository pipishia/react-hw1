import style from './header.module.css'
export default function header({ title, slogan }) {
    return (

        <header className={style.header}>
            <div className="container d-flex flex-column align-items-center">
                <img className={style.avatar} src="./images/avatar.png" alt="avatar" />
                <h1 className={style.headerTitle}>QQPR{title}</h1>
                <hr className={style.divider} />
                <p className={style.slogan}>SUZUME{slogan}</p>
            </div>
        </header>
    );
}


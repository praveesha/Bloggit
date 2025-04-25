import styles from './authLinks.module.css';

const AuthLinks = () => {
    //temporary
    const status = 'not authenticated';

  return (
    <div className={styles.container}>
        <>
            {status === 'authenticated' ? (
                <div className={styles.authLinks}>
                    <a href="/login" className={styles.link}>Login</a>
                    <a href="/register" className={styles.link}>Register</a>
                </div>
            ) : (
                <div className={styles.authLinks}>
                    <a href="/write" className={styles.link}>Write</a>
                    <span className={styles}>Logout</span>
                </div>
            )}
        </>
    </div>
  )
}

export default AuthLinks

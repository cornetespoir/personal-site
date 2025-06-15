import styles from './riddler.module.css'

export function Riddler() {
    return (
        <div className={styles.containerriddler}>
            <div className={styles.eddie}>
                <div className={styles.detail}></div>
                <div className={styles.detail}></div>
                <div className={styles.hat}>
                    <div className={styles.band}></div>
                    <div className={styles.center}></div>
                    <div className={styles.top}></div>
                    <div className={styles.brim}>
                        <div className={styles.right}></div>
                        <div className={styles.left}></div></div></div>
                <div className={styles.face}>
                    <div className={styles.base}></div>
                    <div className={styles.ear}></div>
                    <div className={styles.chin}>
                        <div className={styles.center}></div></div></div>
                <div className={styles.hair}></div>
                <div className={styles.cleanup}>
                    <div className={styles['top-mask']}></div></div>
                <div className={styles.mask}><div className={styles.center}></div>
                    <div className={styles['left-eye']}></div>
                    <div className={styles['right-eye']}></div></div><div className={styles.nose}>
                    <div className={styles.center}></div></div><div className={styles.smile}>
                    <div className={styles.side}></div><div className={styles.main}></div></div><div className={styles.neck}></div></div>
        </div>
    )
}
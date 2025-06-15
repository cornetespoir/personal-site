import clsx from 'clsx'
import styles from './kirby.module.css'

export function Kirby() {
    const cheekCLasses = clsx(
        styles.cheek
    )
    const leftEye = clsx(
        styles.eye,
        styles.left,
    )
    const rightEye = clsx(
        styles.eye,
        styles.right,
    )
    const leftarm = clsx(
        styles.arm,
        styles.left,
    )
    const rightarm = clsx(
        styles.arm,
        styles.right,
    )
    return (
        <div className={styles.kirby}><div className={styles.body}>
            <div className={cheekCLasses}></div>
            <div className={leftEye}>
                <center>
                    <div className={styles.pupil}>.</div>
                </center>
                <div className={styles.bottom}></div>
            </div>
            <div className={rightEye}><center>
                <div className={styles.pupil}>.</div>
            </center>
                <div className={styles.bottom}></div></div>
            <div className={leftarm}></div>
            <div className={rightarm}></div>
            <div className={styles.mouth}></div><div className={styles.feet}></div></div></div>
    )
}
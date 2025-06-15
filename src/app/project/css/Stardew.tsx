import styles from './stardew.module.css'

export function Stardew() {

    return (
        <div className='container-stardew'>  <div className={styles.postdate}>
            <div className={styles.dayofweekhat}></div>
            <div className={styles.dayofweek}>
                <div className={styles.dayHat}>

                </div>
                <div className={styles.dayTop}></div>
                <div className={styles.day}>
                    Sun. 5
                </div>
                <div className={styles.dayBottom}></div>
                <div className={styles.dayShoes}></div>


            </div>
            <div className={styles.timeofday}>
                <div className={styles.timehat}></div>
                <div className={styles.timetop}></div>
                <div className={styles.time}>11:29 pm</div>
            </div>

            <div className={styles.timesocks}></div>
            <div className={styles.timeankles}></div>
            <div className={styles.timeshoes}></div>

        </div>

            <div className={styles.holders} />

            <div className={styles.notes}>
                <div className={styles.thenotes}>10000</div>
                <div className={styles.notestop}>
                </div>
                <div className={styles.noteshat}>

                </div>

                <div className={styles.notehead}></div>

                <div className={styles.notecontent}></div>



                <div className={styles.notehead}></div>
                <div className={styles.noteshat}>

                </div>

                <div className={styles.notestop}>
                </div>
            </div>
        </div>
    )
}
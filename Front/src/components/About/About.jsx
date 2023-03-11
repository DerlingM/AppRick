import React from "react";
import styles from './About.module.css'
export default function About(){
    return(
        <div className={styles.container} >
             <div className={styles.containertext}>
                <h1>Hola! soy Mario Derling Lopez</h1>
             <p style={{color: "white" } }> Esta es mi primera app en reac, talvez sea un poco basica pero poco a poco he estado agregando nuevas cosas para que la app se vea mejor, y asi aprender un poco mas con el tiempo</p>
             </div>
        
        </div>
      
    )
}
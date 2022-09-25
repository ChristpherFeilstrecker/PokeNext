import Image from "next/image"
import styles from '../../styles/Sobre.module.css'

export default function Sobre(){
    return(
        <div className={styles.about}>
        
        <h1>Sobre o Projeto</h1>
        <div className={styles.btncontainer}>
            Projeto Pokenext foi desenvolvido com intuito de práticar a técnologia  <a href='https://nextjs.org/'  target="_blank" rel='noreferrer'>
           <div className={styles.btn}> Next.js</div>
      </a> 
        </div>
        <div className={styles.box}>
          <h3>Desenvolvedor:</h3> 
          <div>Christopher Feilstrecker da Silva</div> 
        </div>

        <div className={styles.container}>
          <h3>Tecnologias Utilizadas:</h3> 
          <lu>
            <li>React</li>
            <li>Javascript</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>Next.js</li>
          </lu>
        </div>

        <div className={styles.box}>
          <h4>Entre em contato:</h4> 
          <div>
          <a href={`https://api.whatsapp.com/send?phone=5551989477910&text=Olá! Meu nome é...`}
              target="_blank" rel="noreferrer">
              <Image className="whats-icon" 
              src='/images/whats.png' 
              width='30px' 
              height='30px' 
              alt="icon-whats" />
            </a>
            </div> 
        </div>
        
        </div>
    )
}
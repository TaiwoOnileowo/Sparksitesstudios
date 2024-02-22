import React from 'react'
import styles from '../../style'
const CTA = () => {
  return (
    <section>
        
        <div className='bg-partner bg-cover h-[350px] md:h-[350px] bg-center md:bg-fixed' >
            <div className='flex flex-col py-6 sm:py-14 md:py-20 px-4 md:px-16 max-w-[500px] md:max-w-[650px]'>
            <h1 className={`${styles.heading2} text-white`}>Make Us Your<span className='text-[#00BFFF] text-[55px]'> Digital Partner</span> Today!</h1>
            <a href=""><button className={`${styles.button} btn1`}>Request A Proposal</button></a>
            </div>
        </div>
        
    </section>
  )
}

export default CTA

import React from 'react';
import classes from './Specialists.module.scss';
interface specialistProps{
  title: string;
  paragraph: string;
}
const Specialists = ({infoSpecialist}:{
  infoSpecialist: Array<specialistProps>;
})  => {
  
  
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>Большой выбор специалистов</h1>
      <div className={classes.textWrapper}>
      {
        infoSpecialist.map((item)=>(
          <div className={classes.text}>
            <p className={classes.paragraphFirst}>{item.title}</p>
            <p className={classes.paragraphSecond}>{item.paragraph}</p>
        </div>
        ))
      }
      </div>
    </div>
  );
};

export default Specialists;
import styles from './styles.module.css'
export default function Icon({id, selected="Default-Ignore", imageSource, imageAlt, height, width}) {
  if(selected === "Default-Ignore")
  {
  	return (
	    <div className={styles.container}>
	      <img src={imageSource+".svg"} alt={imageAlt} height={height} width={width}/>
	    </div>
  	)
  }
  else if(id == selected)
  {
		return (
  		<div className={styles.container}>
        <img src={imageSource+"-selected.svg"} alt={imageAlt} height={height} width={width}/>
    	</div>
    )
  }
  else
  {
		return (
  		<div className={styles.container}>
        <img src={imageSource+"-unselected.svg"} alt={imageAlt} height={height} width={width}/>
    	</div>
    )
	}
}

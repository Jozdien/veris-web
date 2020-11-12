import styles from './styles.module.css'
export default function Icon({ imageSource, imageAlt, height, width }) {
  return (
      <div className={styles.container}>
          <img src={imageSource} alt={imageAlt} height={height} width={width}/>
      </div>
  )
}

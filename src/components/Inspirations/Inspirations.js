import Image from "next/image";
import { useRouter } from "next/router"
import styles from "src/components/Inspirations/Inspirations.module.scss";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { getInspirations } from "src/store/slices/inspirations";

function Inspirations() {
  const dispatch = useDispatch()

  // fetch inspirations
  useEffect(() => {
    dispatch(getInspirations())
  }, [dispatch])
  const { inspirations } = useSelector((state) => state.inspirations)


  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p>Inspirations</p>
      </div>
      <div className={styles.grid}>
        {
          inspirations?.map((item, index) => {
            const img = `/images/inspo-2.png`;
            return (
              <figure key={index}>
              <Image
              loader={() => img} 
                src={item.image}
                objectFit="cover"
                alt="Slide 1"
                layout="fill"
              />
            </figure>
            )
            
            })
        }
      </div>
    </div>
  );
}

export default Inspirations;

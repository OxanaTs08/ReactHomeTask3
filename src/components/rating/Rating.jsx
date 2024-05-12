import React, {useState} from "react";
import '../../index.css';

const styles = {
    div: {
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px'
    },
    img: {
        width: '100px',  
        height: '100px'
    },
    bottomBlock: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
    }
}

function Rating() {
    
    const [ratingValue, setRatingValue] = useState(0);
    const ratingList= [
        'https://t4.ftcdn.net/jpg/03/80/35/39/360_F_380353964_T1BYrcnTa10esMxYRAlruj6OpyFkUufo.jpg',
        'https://www.clipartmax.com/png/middle/448-4489878_1-out-of-5-stars-1-star-rating-png.png',
        'https://yandex-images.clstorage.net/BfZd98401/dfc16eLh/cZTUDRgvoewTiP3kvhMHnZsi808IyapXqWRJFK9zzP0iG0GryiX7oshLXPpyAvL5VlWfrLpElJ2VhytuQN1WIJHA5AlM65X9xt355Vr3x-0LYwf-3EmuJmxE-GUfBiiowquU26zWOfCaKJ5sBcDVHvdky_0r4bFNkNbKjyTe5eGB5fY_-OyxqrP7PXAcsHQsyGLXz3hojhf-VuhSPFWbXePugI3vV0uBylmtrwRS1h-0Vqm7-EHh_MDUXQ9EnIT2oXUlTDgeIZvB6_wynzFkbJkTJs87m2x0P5VaQn_WyQwS3CG8XXepMprZnN11EOVNF1U6SVtSAxyRphzc9M40NZDHlW6rXdKaAkjtcA8Tpvx44vYNCZj-9cxXqSHsVit8MHwDr-_F-IJZqH0fpSJ2rxUF-Nn5AqDvIwZefxUtNwfxlRTe230hqVD5P5Lv0AYuWfPUnGo6rcfNt-rDv5XpnQBsAMwsZRrSSLoMzQUz1852NqnamoEgLODmDS8UHcUW0TfnPqh8oJmRaOyzToHXzHjQZMxLmGxGDgTow2xlaU3wHgG9Pqe4wZrrXD9VYGQulYUbC5hg400A9b4OFM30paLFB4_7PmKpYYqMM_zT5P7ZExQNGKgdN551q7GuRGuf8j7xbL9kmJJrWAwup3DH7TW3Wcl7MiCuwuQfXNavhAeixyaOqi_jm_GbncPMk9e9e_I3bToKDufetZgDXDe7vOD8gkwcJriS6qtcHETQ107EB9m5eqMSL6C1XKx3DcZ1MZfGDGs8MJjS-_yTDzI23_mDFY-ZuF-3_RSIAxxkmqwRDTFsvFX4sMqqP51GIkU85rbYyJvgsL6SdZ3s5b-091IXZ19JDiFYI6pMwyyDd85KQ6deqvmPNxy1WwAeNdlMAqxQzq51a6Dquv5etRLkzRSlWSs4E0KMUFe-rYQvBreyJpa9Ga2R2eNp_1E8k7eve-E3vuqonrcf5jngP_bKk',
        'https://sun9-28.userapi.com/impf/c855436/v855436801/d69a5/8TdLk-8oMHA.jpg?size=1161x913&quality=96&sign=fc8537d8437b1421872208ca5e29fc8a&c_uniq_tag=3sdCGa_KUxOtSRVS5RNDFGr77OoKVRi8MwqGagANG1E&type=album',
        'https://banner2.kisspng.com/20181128/uct/kisspng-galatasaray-s-k-dream-league-soccer-uefa-champion-yldz-clipart-ourclipart-5bff31fccd2c99.8288298815434511328404.jpg'
    ]
    const [ratingWord, setRatingWord] = useState('')
    const ratingWords = ['Плохо','Хорошо','Отлично','Супер']

    function handleRatingClick(value) {
        setRatingValue(value);
        setRatingWord(ratingWords[value - 1]);
    }
    
    return(
        <div style={styles.div}>
         <>
            <button className="button"  onClick={() => handleRatingClick(1)}>
             {ratingWords[0]}
            </button>

            <button className="button" onClick={() => handleRatingClick(2)}>
            {ratingWords[1]}
            </button>

            <button className="button" onClick={() => handleRatingClick(3)}>
            {ratingWords[2]}
            </button>

            <button className="button" onClick={() => handleRatingClick(4)}>
            {ratingWords[3]}
            </button>
          </>

         <div style={styles.bottomBlock}>
            Ваша Оценка 
            <img style={styles.img} src={ratingList[ratingValue]}/>
         </div>
        </div>
    )
}
export default Rating;
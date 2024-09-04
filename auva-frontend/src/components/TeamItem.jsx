import { useState } from 'react';
import profile_bg from '../assets/img/prfoile-bg.png';

export default function TeamItem({ item }) {
    const [showDes, setShowDes] = useState(false);
    const showDesHandle = () => {
        setShowDes(!showDes);
    }
    return (
        <div className="slider-box">
            <div className="slider-title mb-3 pb-1">
                <h3 className='text-uppercase mb-0 pb-0'>
                    <svg width="7" height="9" viewBox="0 0 7 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.547231 1.24591L0.54723 7.85258C0.54744 7.91947 0.565889 7.98503 0.60059 8.04222C0.635291 8.0994 0.68493 8.14604 0.744165 8.17711C0.8034 8.20818 0.869989 8.22251 0.936761 8.21855C1.00353 8.21459 1.06796 8.1925 1.12311 8.15465L5.89459 4.85132C6.09243 4.71441 6.09243 4.38481 5.89459 4.24754L1.12311 0.944205C1.06808 0.905969 1.00362 0.883546 0.936732 0.879374C0.869849 0.875201 0.803101 0.889437 0.74374 0.920536C0.684379 0.951635 0.634676 0.998408 0.600031 1.05577C0.565387 1.11313 0.547125 1.1789 0.547231 1.24591Z" fill="#808080" />
                    </svg>
                    {item.name}
                </h3>
            </div>
            <div className="slider-images">
                <img className='slider-profile_bg' src={profile_bg} alt="" />
                <img src={item.img} alt="" />
            </div>
            <div className="slider-bio">
                <div className="bio d-flex justify-content-between align-items-center">
                    <div className="slider-left_title">
                        <h3 className='text-uppercase'>{item.title}</h3>
                    </div>
                    <div onClick={() => showDesHandle()} className="slider-right_bio">
                        {!showDes && (<p className='title_bio p-0 m-0'>BIO</p>)}
                        {showDes ?
                            <button className='p-0 bg-transparent border-0'>
                                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.5" d="M1.96919 18.4058L0.226562 16.6631L7.19707 9.69263L0.226562 2.72212L1.96919 0.979492L8.9397 7.95L15.9102 0.979492L17.6528 2.72212L10.6823 9.69263L17.6528 16.6631L15.9102 18.4058L8.9397 11.4353L1.96919 18.4058Z" fill="white" />
                                </svg>
                            </button>
                            :
                            <button className='p-0 bg-transparent border-0'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.4189 13.3111H13.5865V23.1436H10.309V13.3111H0.476562V10.0336H10.309V0.201172H13.5865V10.0336H23.4189V13.3111Z" fill="#808080" />
                                </svg>
                            </button>
                        }
                    </div>
                </div>
                {showDes &&
                    (item.des && <p className='slider-desc'>{item.des}</p>)
                }
                {showDes &&
                    <ul>
                        {item.social.map((s, index) => (
                            <li key={index}>
                                <a href={s.url} target='_blank' className='d-flex align-items-center gap-1'>
                                    <span className="text-uppercase">{s.name}</span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.02291 2.19381L2.43677 2.19381C2.1746 2.18925 1.92471 2.0819 1.74092 1.89489C1.55713 1.70788 1.45414 1.45616 1.45414 1.19396C1.45414 0.93175 1.55713 0.680033 1.74092 0.493021C1.92471 0.306008 2.1746 0.198664 2.43677 0.194108L10.437 0.194108C10.5684 0.193732 10.6986 0.219337 10.82 0.269451C10.9415 0.319565 11.0519 0.393199 11.1448 0.486118C11.2377 0.579038 11.3114 0.68941 11.3615 0.810887C11.4116 0.932364 11.4372 1.06255 11.4368 1.19396L11.4368 9.19416C11.4285 9.45375 11.3195 9.6999 11.1329 9.88054C10.9463 10.0612 10.6967 10.1621 10.437 10.162C10.1773 10.162 9.92777 10.0608 9.74129 9.88005C9.55482 9.69928 9.44599 9.45304 9.43783 9.19346L9.43783 3.60731L2.6595 10.3856C2.47197 10.5732 2.21761 10.6785 1.9524 10.6785C1.68718 10.6785 1.43283 10.5732 1.24529 10.3856C1.05775 10.1981 0.952397 9.94375 0.952397 9.67853C0.952397 9.41332 1.05775 9.15896 1.24529 8.97142L8.02291 2.19381Z" fill="white" />
                                    </svg>
                                </a>
                            </li>

                        ))}
                    </ul>
                }
            </div>
        </div>
    )
}

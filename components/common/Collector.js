import Link from 'next/link';

const Collector = ({data,count,countShow=true,columnSize = "col-xl-4 col-lg-6"}) => {
    return(
        <div className={columnSize}>
            <div className="seller-item">
                <div className="seller-inner">
                    <div className="seller-part">
                        <p className="assets-number">{countShow?count+1:''}</p>
                        <div className="assets-owner">
                            <div className="owner-thumb veryfied">
                                <Link href="/author">
                                <a className=""><img
                                        src={`${data.image}`} alt="seller-img" /></a>
                                </Link>
                            </div>
                            <div className="owner-content">
                                <h6>
                                <Link href="/author">
                                    <a>{`${data.name}`}</a>
                                </Link> 
                                </h6>
                                <p>${`${data.collected}`}</p>
                            </div>
                        </div>
                    </div>
                    
                    <span className={`${data.increament > 0 ?'badge rounded-pill bg-blue':'badge rounded-pill bg-orange'}`}>{`${data.increament}`}%</span>
                </div>
            </div>
        </div>
    )
}

export default Collector
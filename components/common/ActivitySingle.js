import Link from 'next/link';

const ActivitySingle = ({item}) => {
    return(
        <div className="activity-item">
            <div
                className="lab-inner d-flex flex-wrap align-items-center p-3 p-md-4">
                <div className="lab-thumb me-3 me-md-4">
                    <img src={`${item.image}`} alt="img" />
                </div>
                <div className="lab-content">
                    <h4>
                        <Link href="/itemdetails">
                        <a>{`${item.title}`}</a>
                        </Link>
                    </h4>
                    <p className="mb-2">{`${item.description}`}
                    </p>
                    <p className="user-id">By: 
                    <Link href="/author">
                    <a >{`${item.by}`}</a>
                    </Link>
                    </p>
                    <p>At: {`${item.createdAt}`}</p>
                </div>
            </div>
        </div>
    )
}

export default ActivitySingle;
import Link from "next/link";

const PageHeader = ({text,breadcrumb = true}) => {
    const authorSection = 
    <a className="col-author" href="author.html"><img src="assets/images/seller/collector-3.gif"
    alt="Author" />
    <span>Nakashika _Chang</span></a>;

    const breadcurmbSection = <ol className="breadcrumb">
        <li>
        <Link href="/">
            <a>{`${text.linkText}`}</a>
        </Link> 
        </li>
        <li className="active">{`${text.heading}`}</li>
    </ol>;

    return (
        <section className="page-header-section style-1">
            <div className="container">
                <div className="page-header-content">
                    <div className="page-header-inner">
                        <div className="page-title">
                            <h2>{`${text.heading}`} </h2>

                            {text.author?authorSection:''}
                        </div>
                        
                        {breadcrumb?breadcurmbSection:''}
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageHeader;
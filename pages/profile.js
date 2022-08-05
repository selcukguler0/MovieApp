import Products from '../data/Product/Products.json';
import CollectionSingle from '../components/common/Collection';
import PopularList from '../data/Collection/Popular.json'
import ProductSingle from "../components/common/ProductSingle";
import FollowerSingle from '../components/common/Collector'
import User from '../data/User/Users.json'
import ActivitySingle from '../components/common/ActivitySingle';

var Follower = User.slice(0,8);
var Following = User.slice(0,8);


var GetPopularList = PopularList.slice(0,3);


var productList = Products;
var featuredProduct = Products.slice(0,9);

const AuthorInfo =
{
    "name":"Alex joe",
    "profileImage":"assets/images/profile/1.gif",
    "cover":"assets/images/profile/cover.jpg",
    "userName":"@alexjoe.jxe",
    "about":"Collaboratively innovate compelling mindshare after prospective partnerships Competently sereiz long-term high-impact internal or sources via user friendly strategic themesr areas creat Dramatically coordinate premium partnerships rather than standards compliant technologies ernd Dramatically matrix ethical collaboration and idea-sharing through opensource methodologies and Intrinsicly grow collaborative platforms vis-a-vis effective scenarios. Energistically strategize cost effective ideas before the worke unde.",
    "country":"USA",
    "specializeIn":"Art",
    "wallet":"fdffx1xr394kdfdk23sl",
    "age":36,
    "birthdate":"27-02-1996",
    "address":"Streop Rd, Peosur, Inphodux, USA.",
    "activities":[
        {
            "id":1,
            "title":"Gold digger x",
            "description":"GOLD DIGGER (x Antoni Tudisco) #44/44 was put up for sale for0.0991 ETH",
            "image":"assets/images/activity/01.gif",
            "by":"@rasselmrh",
            "createdAt":"10/07/2022, 10:03 am"
        },
        {
            "id":2,
            "title":"ghost lix xrf",
            "description":"two rare collection purchased for0.001 ETH",
            "image":"assets/images/activity/02.gif",
            "by":"@technonazmul",
            "createdAt":"10/07/2022, 08:23 am"
        },
        {
            "id":3,
            "title":"Trust In meh",
            "description":"The Shopping Cart #54/65 was put up for sale for 0.021 ETH",
            "image":"assets/images/activity/03.gif",
            "by":"@reo2lxsr",
            "createdAt":"10/07/2022, 12:03 am"
        },
        {
            "id":4,
            "title":"Sysytan #0le",
            "description":"A offer of $200.00 was placed for ÜNDERSTANDING (Sean Williams) #1/20",
            "image":"assets/images/activity/04.gif",
            "by":"@reo2lxsr",
            "createdAt":"10/07/2022, 12:03 am"
        }
    ]
};

const Author = () => {


    return (
        <div>
        
        <section className="profile-section padding-top padding-bottom">
        <div className="container">
            <div className="section-wrapper">
                <div className="member-profile">
                    <div className="profile-item">
                        <div className="profile-cover">
                            <img src={AuthorInfo.cover} alt="cover-pic" />
                            <div className="edit-photo custom-upload">
                                <div className="file-btn"><i className="icofont-camera"></i>
                                    Edit Photo</div>
                                <input type="file" />
                            </div>
                        </div>
                        <div className="profile-information">
                            <div className="profile-pic">
                                <img src={AuthorInfo.profileImage} alt="DP" />
                                <div className="custom-upload">
                                    <div className="file-btn">
                                        <span className="d-none d-lg-inline-block"> <i className="icofont-camera"></i>
                                            Edit</span>
                                        <span className="d-lg-none mr-0"><i className="icofont-plus"></i></span>
                                    </div>
                                    <input type="file" />
                                </div>
                            </div>
                            <div className="profile-name">
                                <h4>{AuthorInfo.name}</h4>
                                <p>{AuthorInfo.userName}</p>
                            </div>
                            <ul className="profile-contact">
                                <li className="crypto-copy">
                                    <div id="cryptoCode" className="crypto-page">
                                        <input id="cryptoLink" value="0x731F9FBF4163D47B0F581DD9EC45C9" readOnly />
                                        <div id="cryptoCopy" data-bs-toggle="tooltip" data-bs-placement="top"
                                            title="Copy Address">
                                            <span className="copy-icon">
                                                <i className="icofont-ui-copy" aria-hidden="true"
                                                    data-copytarget="#cryptoLink"></i>
                                            </span>

                                        </div>
                                    </div>

                                </li>
                                <li>
                                    <a href="#">
                                        <div className="icon"><i className="icofont-ui-rate-add"></i></div>
                                        <div className="text">
                                            <p>Follow</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="icon"><i className="icofont-speech-comments"></i></div>
                                        <div className="text">
                                            <p>Send Message</p>
                                        </div>
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className="profile-item d-none">
                        <div className="lab-inner">
                            <div className="lab-thumb">
                                <a href="#"><img src="assets/images/profile/1.gif" alt="profile" /></a>
                            </div>
                            <div className="lab-content">
                                <div className="profile-name">
                                    <div className="p-name-content">
                                        <h4>William Smith</h4>
                                        <p>Active 02 Minutes Ago</p>
                                    </div>

                                    <div className="contact-button">
                                        <button className="contact-btn">
                                            <i className="icofont-info-circle"></i>
                                        </button>
                                    </div>
                                </div>
                                <ul className="profile-contact">
                                    <li>
                                        <a href="#">
                                            <div className="icon"><i className="icofont-user"></i></div>
                                            <div className="text">
                                                <p>Add Friends</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="icon"><i className="icofont-envelope"></i></div>
                                            <div className="text">
                                                <p>Publice Message</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="icon"><i className="icofont-envelope"></i></div>
                                            <div className="text">
                                                <p>Private Message</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="profile-details">
                        <nav className="profile-nav">
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <button className="nav-link active" id="nav-allNft-tab" data-bs-toggle="tab"
                                    data-bs-target="#allNft" type="button" role="tab" aria-controls="allNft"
                                    aria-selected="true">All NFT</button>
                                <button className="nav-link" id="nav-about-tab" data-bs-toggle="tab" data-bs-target="#about"
                                    type="button" role="tab" aria-controls="about" aria-selected="false">About</button>
                                <button className="nav-link" id="nav-activity-tab" data-bs-toggle="tab"
                                    data-bs-target="#activity" type="button" role="tab" aria-controls="activity"
                                    aria-selected="false">Activity</button>
                                <button className="nav-link" id="nav-follower-tab" data-bs-toggle="tab"
                                    data-bs-target="#follower" type="button" role="tab" aria-controls="follower"
                                    aria-selected="false">Follower <span className="item-number">231</span></button>
                                <button className="nav-link" id="nav-following-tab" data-bs-toggle="tab"
                                    data-bs-target="#following" type="button" role="tab" aria-controls="following"
                                    aria-selected="false">Following <span className="item-number">145</span></button>

                                <div className="dropdown">
                                    <a className="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Setting
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Profile</a></li>
                                        <li><a className="dropdown-item" href="#">Privacy</a></li>
                                        <li><a className="dropdown-item" href="#">Block user</a></li>
                                    </ul>
                                </div>

                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                            
                            <div className="tab-pane activity-page fade show active" id="allNft" role="tabpanel">
                                <div>
                                    <div className="row">
                                        <div className="col-xl-9">
                                            <article>
                                                <div className="activity-tab">
                                                    <ul className="nav nav-pills mb-30 px-2" id="pills-tab" role="tablist">

                                                        <li className="nav-item" role="presentation">
                                                            <button className="nav-link active" id="pills-mentions-tab"
                                                                data-bs-toggle="pill" data-bs-target="#pills-mentions"
                                                                type="button" role="tab" aria-controls="pills-mentions"
                                                                aria-selected="true"><i className="icofont-flash"></i>
                                                                On Sale</button>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <button className="nav-link" id="pills-favorites-tab"
                                                                data-bs-toggle="pill" data-bs-target="#pills-favorites"
                                                                type="button" role="tab" aria-controls="pills-favorites"
                                                                aria-selected="false"><i className="icofont-license"></i>
                                                                owned</button>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <button className="nav-link" id="pills-groups-tab"
                                                                data-bs-toggle="pill" data-bs-target="#pills-groups"
                                                                type="button" role="tab" aria-controls="pills-groups"
                                                                aria-selected="false"><i className="icofont-puzzle"></i>
                                                                Created</button>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <button className="nav-link" id="pills-friends-tab"
                                                                data-bs-toggle="pill" data-bs-target="#pills-friends"
                                                                type="button" role="tab" aria-controls="pills-friends"
                                                                aria-selected="false"><i className="icofont-library"></i>
                                                                Collection</button>
                                                        </li>

                                                        <li className="custom-select">
                                                            <select>
                                                                <option value="1">Everything</option>
                                                                <option value="2">Recent</option>
                                                                <option value="3">Relevant</option>
                                                                <option value="4">Popular</option>
                                                            </select>
                                                        </li>
                                                    </ul>
                                                    <div className="tab-content activity-content" id="pills-tabContent">

                                                        <div className="tab-pane fade mentions-section show active onsale-loadmore"
                                                            id="pills-mentions" role="tabpanel"
                                                            aria-labelledby="pills-mentions-tab">

                                                            <div className="row justify-content-center g-4">
                                                            {
                                                                productList.map((item) => (
                                                                    <div className="col-lg-4 col-sm-6" key={item.id}>
                                                                        <ProductSingle data={item} />
                                                                    </div>
                                                                ))
                                                            }
                                                                
                                                                
                                                            </div>
                                                        </div>
                                                        <div className="tab-pane fade" id="pills-favorites" role="tabpanel"
                                                            aria-labelledby="pills-favorites-tab">

                                                            <div className="row justify-content-center g-4">
                                                            {
                                                                productList.map((item) => (
                                                                    <div className="col-lg-4 col-sm-6" key={item.id}>
                                                                        <ProductSingle data={item} />
                                                                    </div>
                                                                ))
                                                            }
                                                                
                                                                
                                                            </div>
                                                        </div>
                                                        <div className="tab-pane fade" id="pills-friends" role="tabpanel"
                                                            aria-labelledby="pills-friends-tab">

                                                            <div className="row g-4">
                                                            {
                                                                GetPopularList.map((item) => (
                                                                    
                                                                    <CollectionSingle item={item} key={item.id} />
                                                                    
                                                                ))
                                                            }
                       
                                                              
                                                               
                                                            </div>
                                                        </div>
                                                        <div className="tab-pane fade" id="pills-groups" role="tabpanel"
                                                            aria-labelledby="pills-groups-tab">
                                                            <div className="row justify-content-center g-4">
                                                                
                                                            {
                                                                productList.map((item) => (
                                                                    <div className="col-lg-4 col-sm-6" key={item.id}>
                                                                        <ProductSingle data={item} />
                                                                    </div>
                                                                ))
                                                            }
                                                                
                                                                
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </article>
                                        </div>

                                        
                                        <div className="col-xl-3">
                                            <aside className="mt-5 mt-xl-0">
                                                <div className="profile-widget search-widget">
                                                    <div className="widget-inner">
                                                        <div className="widget-title">
                                                            <h5>Search NFT</h5>
                                                        </div>
                                                        <div className="widget-content">
                                                            <p>Search from best Rarest NFT collections</p>
                                                            <div className="form-floating nft-search-input">
                                                                <input type="text" className="form-control"
                                                                    placeholder="Search NFT" />
                                                                <label>Search NFT</label>
                                                                <button type="button"> <i
                                                                        className="icofont-search-1"></i></button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="widget widget-instagram">
                                                    <div className="widget-header">
                                                        <h5 className="title">Featured NFT</h5>
                                                    </div>
                                                    <ul className="widget-wrapper d-flex flex-wrap justify-content-center">
                                                    {
                                                            featuredProduct.map((item) => (
                                                                <li key={item.id}>
                                                                    <a><img loading="lazy"
                                                                            src={`${item.image}`}
                                                                            alt="nft-img" /></a>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                            </aside>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            
                            <div className="tab-pane fade" id="about" role="tabpanel" aria-labelledby="nav-about-tab">
                                <div>
                                    <div className="row">
                                        <div className="col-xl-9">
                                            <article>

                                                <div className="info-card mb-3">
                                                    <div className="info-card-title">
                                                        <h4>About</h4>
                                                    </div>
                                                    <div className="info-card-content">
                                                        <p>{`${AuthorInfo.about}`}</p>
                                                    </div>
                                                </div>
                                                <div className="info-card">
                                                    <div className="info-card-title">
                                                        <h4>Other Info</h4>
                                                    </div>
                                                    <div className="info-card-content">
                                                        <ul className="info-list">
                                                            <li>
                                                                <p className="info-name">Name</p>
                                                                <p className="info-details">{`${AuthorInfo.name}`}</p>
                                                            </li>
                                                            <li>
                                                                <p className="info-name">Country</p>
                                                                <p className="info-details">{`${AuthorInfo.country}`}</p>
                                                            </li>
                                                            <li>
                                                                <p className="info-name">Specialize in</p>
                                                                <p className="info-details">{`${AuthorInfo.specializeIn}`}</p>
                                                            </li>
                                                            <li>
                                                                <p className="info-name">Wallet Add</p>
                                                                <p className="info-details">{`${AuthorInfo.wallet}`}</p>
                                                            </li>
                                                            <li>
                                                                <p className="info-name">Age</p>
                                                                <p className="info-details">{`${AuthorInfo.age}`}</p>
                                                            </li>
                                                            <li>
                                                                <p className="info-name">Date of Birth</p>
                                                                <p className="info-details">{`${AuthorInfo.birthdate}`}</p>
                                                            </li>
                                                            <li>
                                                                <p className="info-name">Address</p>
                                                                <p className="info-details">{`${AuthorInfo.address}`}</p>
                                                            </li>
                                                        </ul>

                                                    </div>
                                                </div>
                                            </article>
                                        </div>

                                        
                                        <div className="col-xl-3">
                                            <aside className="mt-5 mt-xl-0">
                                                <div className="profile-widget search-widget">
                                                    <div className="widget-inner">
                                                        <div className="widget-title">
                                                            <h5>Search NFT</h5>
                                                        </div>
                                                        <div className="widget-content">
                                                            <p>Search from best Rarest NFT collections</p>
                                                            <div className="form-floating nft-search-input">
                                                                <input type="text" className="form-control"
                                                                    placeholder="Search NFT" />
                                                                <label>Search NFT</label>
                                                                <button type="button"> <i
                                                                        className="icofont-search-1"></i></button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="widget widget-instagram">
                                                    <div className="widget-header">
                                                        <h5 className="title">Featured NFT</h5>
                                                    </div>
                                                    <ul className="widget-wrapper d-flex flex-wrap justify-content-center">
                                                    {
                                                            featuredProduct.map((item) => (
                                                                <li key={item.id}>
                                                                    <a><img loading="lazy"
                                                                            src={`${item.image}`}
                                                                            alt="nft-img" /></a>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                            </aside>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="tab-pane fade" id="activity" role="tabpanel" aria-labelledby="nav-activity-tab">
                                <div>
                                    <div className="row">
                                        <div className="col-xl-9">
                                            <article>
                                                <h4 className="h4-title">Authors Activity</h4>
                                                <div className="row gy-3">
                                                    {
                                                        AuthorInfo.activities.map((item) =>(
                                                            <div className="col-12" key={item.id}>
                                                                <ActivitySingle item={item} />
                                                            </div>
                                                        ))
                                                    }
                                                    
                                                    
                                                </div>
                                            </article>
                                        </div>

                                        
                                        <div className="col-xl-3">
                                            <aside className="mt-5 mt-xl-0">
                                                <div className="profile-widget search-widget">
                                                    <div className="widget-inner">
                                                        <div className="widget-title">
                                                            <h5>Search NFT</h5>
                                                        </div>
                                                        <div className="widget-content">
                                                            <p>Search from best Rarest NFT collections</p>
                                                            <div className="form-floating nft-search-input">
                                                                <input type="text" className="form-control"
                                                                    placeholder="Search NFT" />
                                                                <label>Search NFT</label>
                                                                <button type="button"> <i
                                                                        className="icofont-search-1"></i></button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="widget widget-instagram">
                                                    <div className="widget-header">
                                                        <h5 className="title">Featured NFT</h5>
                                                    </div>
                                                    <ul className="widget-wrapper d-flex flex-wrap justify-content-center">
                                                        {
                                                            featuredProduct.map((item) => (
                                                                <li key={item.id}>
                                                                    <a><img loading="lazy"
                                                                            src={`${item.image}`}
                                                                            alt="nft-img" /></a>
                                                                </li>
                                                            ))
                                                        }
                                                        
                                                    </ul>
                                                </div>
                                            </aside>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="tab-pane fade" id="follower" role="tabpanel" aria-labelledby="nav-follower-tab">
                                <div>
                                    <div className="row">
                                        <div className="col-xl-9">
                                            <div className="follow-wrapper">
                                                <h4 className="h4-title">All Followers</h4>
                                                <div className="row g-3">
                                                
                                                    {
                                                        Follower.map((item,i=1) =>(
                                                            <FollowerSingle key={item.id} data={item} count={i} countShow={false} columnSize = "col-lg-6" />
                                                            
                                                        ))
                                                        
                                                    }
                                                    
                                                </div>
                                                
                                            </div>
                                        </div>

                                        
                                        <div className="col-xl-3">
                                            <aside className="mt-5 mt-xl-0">
                                                <div className="profile-widget search-widget">
                                                    <div className="widget-inner">
                                                        <div className="widget-title">
                                                            <h5>Search NFT</h5>
                                                        </div>
                                                        <div className="widget-content">
                                                            <p>Search from best Rarest NFT collections</p>
                                                            <div className="form-floating nft-search-input">
                                                                <input type="text" className="form-control"
                                                                    placeholder="Search NFT" />
                                                                <label>Search NFT</label>
                                                                <button type="button"> <i
                                                                        className="icofont-search-1"></i></button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="widget widget-instagram">
                                                    <div className="widget-header">
                                                        <h5 className="title">Featured NFT</h5>
                                                    </div>
                                                    <ul className="widget-wrapper d-flex flex-wrap justify-content-center">
                                                    {
                                                            featuredProduct.map((item) => (
                                                                <li key={item.id}>
                                                                    <a><img loading="lazy"
                                                                            src={`${item.image}`}
                                                                            alt="nft-img" /></a>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                            </aside>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="tab-pane fade" id="following" role="tabpanel"
                                aria-labelledby="nav-following-tab">
                                <div className="row">
                                    <div className="col-xl-9">
                                        <div className="follow-wrapper">
                                            <h4 className="h4-title">Following</h4>
                                            <div className="row g-3">
                                            {
                                                        Following.map((item,i=1) =>(
                                                            <FollowerSingle key={item.id} data={item} count={i} countShow={false} columnSize = "col-lg-6" />
                                                            
                                                        ))
                                                        
                                                    }
                                            </div>
                                            
                                        </div>
                                    </div>

                                    
                                    <div className="col-xl-3">
                                        <aside className="mt-5 mt-xl-0">
                                            <div className="profile-widget search-widget">
                                                <div className="widget-inner">
                                                    <div className="widget-title">
                                                        <h5>Search NFT</h5>
                                                    </div>
                                                    <div className="widget-content">
                                                        <p>Search from best Rarest NFT collections</p>
                                                        <div className="form-floating nft-search-input">
                                                            <input type="text" className="form-control"
                                                                placeholder="Search NFT" />
                                                            <label>Search NFT</label>
                                                            <button type="button"> <i
                                                                    className="icofont-search-1"></i></button>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget widget-instagram">
                                                <div className="widget-header">
                                                    <h5 className="title">Featured NFT</h5>
                                                </div>
                                                <ul className="widget-wrapper d-flex flex-wrap justify-content-center">
                                                {
                                                            featuredProduct.map((item) => (
                                                                <li key={item.id}>
                                                                    <a><img loading="lazy"
                                                                            src={`${item.image}`}
                                                                            alt="nft-img" /></a>
                                                                </li>
                                                            ))
                                                        }
                                                </ul>
                                            </div>
                                        </aside>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    )
}

export default Author;
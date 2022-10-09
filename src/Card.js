import React from 'react'

function Card(props) {
  return (
    <>

     <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center fs-4">{props.info.plan}</h5>
            <h6 className="card-price text-center">{props.info.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
            <li className={props.info.isuser?"":"text-muted"}><span className="fa-li">{props.info.isuser?"✔️":"❌"}</span>{props.info.user}</li>
            <li className={props.info.isstorage?"":"text-muted"}><span className="fa-li">{props.info.isstorage?"✔️":"❌"}</span>{props.info.storage}</li>
            <li className={props.info.iscommunityaccess?"":"text-muted"}><span className="fa-li">{props.info.iscommunityaccess?"✔️":"❌"}</span>{props.info.communityaccess}</li>
            <li className={props.info.ispublicproject?"":"text-muted"}><span className="fa-li">{props.info.ispublicproject?"✔️":"❌"}</span>{props.info.publicproject}</li>
            <li className={props.info.isprivateproject?"":"text-muted"}><span className="fa-li">{props.info.isprivateproject?"✔️":"❌"}</span>{props.info.privateproject}</li>
            <li className={props.info.isphonesupport?"":"text-muted"}><span className="fa-li">{props.info.isphonesupport?"✔️":"❌"}</span>{props.info.phonesupport}</li>
            <li className={props.info.issubdomain?"":"text-muted"}><span className="fa-li">{props.info.issubdomain?"✔️":"❌"}</span>{props.info.subdomain}</li>
            <li className={props.info.isreports?"":"text-muted"}><span className="fa-li">{props.info.isreports?"✔️":"❌"}</span>{props.info.reports}</li>
            </ul>
            <div className="d-grid">
              <a href="#!" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}
export default Card
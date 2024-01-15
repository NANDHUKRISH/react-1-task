import React from 'react'

function Card({data}) {
  return (
   <>
   <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
              <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">{data.plan}</h5>
                <h6 className="card-price text-center">${data.price}<span className="period">/month</span></h6>
                <hr/>
                <ul className="fa-ul">
                  <li className={data.isuser?"":"text-muted"} style={data.isbold?{fontWeight:"bold"}:null}><span className="fa-li">{data.isuser?"✔️":"❌"}</span>{data.user}</li>
                  <li className={data.isstorage?"":"text-muted"}><span className="fa-li">{data.isstorage?"✔️":"❌"}</span>{data.storage}</li>
                  <li className={data.ispublicproject?"":"text-muted"}><span className="fa-li">{data.ispublicproject?"✔️":"❌"}</span>{data.publicproject}</li>
                  <li className={data.iscommunityaccess?"":"text-muted"}><span className="fa-li">{data.iscommunityaccess?"✔️":"❌"}</span>{data.communityaccess}</li>
                  <li className={data.isprivateproject?"":"text-muted"}><span className="fa-li">{data.isprivateproject?"✔️":"❌"}</span>{data.privateproject}</li>
                  <li className={data.isphonesupport?"":"text-muted"}><span className="fa-li">{data.isphonesupport?"✔️":"❌"}</span>{data.phonesupport}</li>
                  <li className={data.issubdomain?"":"text-muted"}><span className="fa-li">{data.issubdomain?"✔️":"❌"}</span><b>{data.subdomainbold}</b>{data.subdomain}</li>
                  <li className={data.isreports?"":"text-muted"}><span className="fa-li">{data.isreports?"✔️":"❌"}</span>{data.reports}</li>
                </ul>
                <div className="d-grid">
                  <a href="!#" className="btn btn-primary text-uppercase">Button</a>
                </div>
              </div>
            </div>
          </div>
   </>
  )
}

export default Card

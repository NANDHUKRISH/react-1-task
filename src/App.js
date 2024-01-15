import PriceCard from "./PriceCard";

function App() {
  let data=[
    {
      plan:"FREE😍",
      price:"0",
      isbold:false,
      user:"Single User",
      isuser:true,
      storage:"5GB",
      isstorage:true,
      publicproject:"Unlimited Public Projects",
      ispublicproject:true,
      communityaccess:"Community Acces",
      iscommunityaccess:true,
      privateproject:"Unlimited Private Projects",
      isprivateproject:false,
      phonesupport:"Dedicated Phone Support",
      isphonesupport:false,
      subdomain:"Free Sub Domain",
      issubdomain:false,
      reports:"Monthly Status Reports",
      isreports:false
    },
    {
      plan:"PLUS😍😍",
      price:"9",
      isbold:true,
      user:"5 User",
      isuser:true,
      storage:"50GB",
      isstorage:true,
      publicproject:"Unlimited Public Projects",
      ispublicproject:true,
      communityaccess:"Community Acces",
      iscommunityaccess:true,
      privateproject:"Unlimited Private Projects",
      isprivateproject:true,
      phonesupport:"Dedicated Phone Support",
      isphonesupport:true,
      subdomain:"Free Sub Domain",
      issubdomain:true,
      reports:"Monthly Status Reports",
      isreports:false
    },
    {
      plan:"PRO😍😍😍",
      price:"49",
      isbold:true,
      user:"Unlimited User",
      isuser:true,
      storage:"150GB",
      isstorage:true,
      publicproject:"Unlimited Public Projects",
      ispublicproject:true,
      communityaccess:"Community Acces",
      iscommunityaccess:true,
      privateproject:"Unlimited Private Projects",
      isprivateproject:true,
      phonesupport:"Dedicated Phone Support",
      isphonesupport:true,
      subdomainbold:"Unlimited ",
      subdomain:"Free Sub Domain",
      issubdomain:true,
      reports:"Monthly Status Reports",
      isreports:true
    }  
  ]
  return (
    <div classNameName="App">
      <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {
            data.map((detail,i)=>{
              return <PriceCard key={i} data={detail}/>
            })
          }
        </div>
      </div>
    </section>
    </div>
  );
}

export default App;

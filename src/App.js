import Card from "./Card";
import './App.css';

function App() {
let data =[
  {
    plan:"FREE😍",
    price:"0",
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
    isreports:false,
  },
  {
    plan:"PLUS😍😍",
    price:"9",
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
    isreports:false,
  },
  {
    plan:"PRO😍😍😍",
    price:"49",
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
    subdomain:"Unlimited Free Sub Domain",
    issubdomain:true,
    reports:"Monthly Status Reports",
    isreports:true,
  }
]


  return (
    <>
    <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {
        data.map((e,i)=>
        {
          return  <Card info={e} key={i}/>
        })
      }
    </div>
  </div>
</section>
    </>
  );
}

export default App;

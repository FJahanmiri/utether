import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';
import { imageConfigDefault } from 'next/dist/shared/lib/image-config';



export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles
  let price = 61000



  return (
    <div style={{ direction: "rtl", minHeight: "11vh", }}>
      <br-x />
      <Window title={"قیمت لحظه ای تتر (دلار)"} style={{ minHeight: 200, margin: 10, width: "calc(100% - 20px)"
      }}>
      
      
      <br-x />

        <div style={{
          width: "100%", height: 50, backgroundColor: "#16EBD939", borderRadius: 10,
          textAlign: "center", 
        }}>
          <br-x />
          <br-xx />
          لحظه ای:{(props.p.price as number).toLocaleString("fa-IR")}
        </div>

        <br-x/>

        <div style={{
          width: "100%", height: 50, backgroundColor: "#16EBD939", borderRadius: 10,
          textAlign: "center"
        }}>
          <br-x />
          <br-xx />
        تغییرات ۲۴ ساعت: 
        {
        "٪"+(parseFloat(props.p.diff24d) as number).toLocaleString("fa-IR")
        }
        </div>

        
        <br-x/>
        
        <div style={{
          width: "100%", height: 50, backgroundColor: "#16EBD939", borderRadius: 10,
          textAlign: "center"
        }}>
          <br-x />
          <br-xx />
        تغییرات هفتگی : 
        {
        "٪"+(parseFloat(props.p.diff7d) as number).toLocaleString("fa-IR")
        }
        </div>

        <br-x/>
        
        <div style={{
          width: "100%", height: 50, backgroundColor: "#16EBD939", borderRadius: 10,
          textAlign: "center"
        }}>
          <br-x />
          <br-xx />
        تغییرات ماهانه : 
        {
        "٪"+(parseFloat(props.p.diff30d) as number).toLocaleString("fa-IR")
        }
        </div>

        <center style={{fontSize:10}}>
           Created By PC Group
        </center>


      </Window>

    </div>
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;


  let res = await fetch("https://api.tetherland.com/currencies")
  let data = await res.json()
  let p = data.data.currencies.USDT

  console.log("Priiiiice:", p)


  return {
    props: {
      data: global.QSON.stringify({
        p,
        session,
        // nlangs,
      })
    },
  }
}
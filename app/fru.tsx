import Script from "next/script"

export default async function ScriptFundraiseUp() {
  
  return (
    <Script 
      type="text/javascript" 
      id="fundraiseup-script"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,n,a){if(!w[n]){var l='call,catch,on,once,set,then,track'
        .split(','),i,o=function(n){return'function'==typeof n?o.l.push([arguments])&&o
        :function(){return o.l.push([n,arguments])&&o}},t=d.getElementsByTagName(s)[0],
        j=d.createElement(s);j.async=!0;j.src='https://cdn.fundraiseup.com/widget/'+a;
        t.parentNode.insertBefore(j,t);o.s=Date.now();o.v=4;o.h=w.location.href;o.l=[];
        for(i=0;i<7;i++)o[l[i]]=o(l[i]);w[n]=o}
        })(window,document,'script','FundraiseUp','ARZDZLPU');`
      }}
      >
      </Script>
  )
}
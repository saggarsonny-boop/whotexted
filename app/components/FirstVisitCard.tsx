'use client'
import { useEffect, useState } from 'react'

const KEY = 'hive_welcomed_whotextedme'

export default function FirstVisitCard() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(KEY)) setVisible(true)
  }, [])

  if (!visible) return null

  const dismiss = () => {
    localStorage.setItem(KEY, '1')
    setVisible(false)
  }

  return (
    <div onClick={dismiss} style={{ position:'fixed',inset:0,zIndex:200,display:'flex',alignItems:'flex-end',justifyContent:'center',padding:'24px',pointerEvents:'auto' }}>
      <div onClick={e => e.stopPropagation()} style={{ background:'rgba(17,24,39,0.97)',border:'1px solid rgba(251,191,36,0.3)',borderRadius:'16px',padding:'20px 24px',maxWidth:'420px',width:'100%',display:'flex',flexDirection:'column',gap:'12px' }}>
        <p style={{ margin:0,fontSize:'16px',color:'#f9fafb',lineHeight:'1.5' }}>
          Find the carrier and location behind any phone number. Free. Try it →
        </p>
        <button onClick={dismiss} style={{ alignSelf:'flex-end',background:'rgba(251,191,36,0.15)',border:'1px solid rgba(251,191,36,0.4)',borderRadius:'100px',padding:'8px 20px',color:'#fbbf24',fontSize:'13px',fontFamily:'inherit',cursor:'pointer' }}>
          Got it
        </button>
      </div>
    </div>
  )
}

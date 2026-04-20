import React from 'react';

export const Logo = (props: any) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 900, fontSize: '18px', fontFamily: 'Oswald, sans-serif' }}>
    <div style={{ width: '28px', height: '28px', backgroundColor: '#E53935', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '16px' }}>
      V
    </div>
    <span style={{ letterSpacing: '1px' }}>VERIFSAFE</span>
  </div>
);

import React from'react';  
import Link from 'next/link';

import '../../assets/components/logo.scss';


export default function Logo() {
    return(
        <div className="logo">
            <Link href="/"><span className='Rajiv'>@Rajiv&nbsp;<span className='Port'>Port<span className='folio'>folio</span></span></span></Link>
        </div>
    );
}
import React from 'react';
import { Images } from '../constant';
Images
function MainHome() {
    return (
        <div className='w-[100%] h-[100vw] bg-no-repeat bg-contain object-cover relative ' style={{ backgroundImage: `url(${Images.background})` }}>
            <h1 class="title"> مرحبا بكم في المطبخ المغربي التقليدي </h1>
        </div>
    );
}

export default MainHome;
import { Images } from "../constant";

Images
function MainAbout() {
    return (
        <div className='w-[100%] h-100 bg-no-repeat bg-cover object-cover relative ' style={{ backgroundImage: `url(${Images.Aboutbg})` }}>
            
        </div>
    );
}

export default MainAbout;
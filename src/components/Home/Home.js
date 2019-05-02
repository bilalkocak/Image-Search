import React from 'react';
import './Home.css';



class Home extends React.Component{
    render(){
        return (
                <div>
                    <div className="App">
                        <header className="App-header">
                            <div className="logo">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0)">
                                        <path d="M28.263 5.90156C23.8481 5.58589 19.4202 6.29511 15.3176 7.97502L12.0309 6.77933C11.8949 5.49379 11.8709 4.19865 11.9591 2.90887C11.9652 2.79169 11.9475 2.6745 11.9073 2.56444C11.8671 2.45438 11.8051 2.35376 11.7252 2.26871C11.6453 2.18367 11.5491 2.11598 11.4425 2.06979C11.3358 2.02359 11.221 1.99984 11.105 2C10.9871 2 8.14795 2.0432 4.52125 5.70977C0.476031 9.79448 0.0199184 17.6166 0.00112724 17.9415C-0.0103146 18.1666 0.0657034 18.3873 0.212955 18.5566C1.73361 20.1007 3.70554 21.1082 5.83663 21.43C8.53295 21.7804 11.2717 21.327 13.717 20.1255L11.3595 24.6802C11.3231 24.75 11.2686 24.8085 11.2018 24.8493C11.1349 24.8901 11.0583 24.9117 10.9803 24.9117H1.70941C1.25635 24.9117 0.821839 25.0938 0.501473 25.4178C0.181107 25.7419 0.00112724 26.1814 0.00112724 26.6396C0.00112724 27.0979 0.181107 27.5374 0.501473 27.8614C0.821839 28.1855 1.25635 28.3675 1.70941 28.3675H21.7818C22.2348 28.3675 22.6694 28.1855 22.9897 27.8614C23.3101 27.5374 23.4901 27.0979 23.4901 26.6396C23.4901 26.1814 23.3101 25.7419 22.9897 25.4178C22.6694 25.0938 22.2348 24.9117 21.7818 24.9117H18.6214C18.5491 24.9116 18.478 24.8929 18.4148 24.8575C18.3515 24.822 18.2981 24.771 18.2596 24.7091C18.221 24.6472 18.1986 24.5764 18.1944 24.5034C18.1902 24.4304 18.2043 24.3575 18.2354 24.2914L21.8997 16.5989C21.9689 16.4437 22.0676 16.3038 22.1903 16.1872C22.3129 16.0706 22.4571 15.9796 22.6145 15.9193C22.772 15.8591 22.9396 15.8308 23.1079 15.836C23.2761 15.8413 23.4417 15.8801 23.5951 15.9501C23.7486 16.0201 23.8869 16.12 24.0022 16.244C24.1174 16.3681 24.2074 16.5139 24.267 16.6732C24.3266 16.8324 24.3545 17.002 24.3493 17.1721C24.3441 17.3423 24.3058 17.5098 24.2366 17.665L22.8187 20.8426C22.7898 20.9086 22.7775 20.9809 22.7829 21.0529C22.7883 21.125 22.8111 21.1946 22.8495 21.2555C22.8882 21.316 22.9414 21.3658 23.0041 21.4002C23.0667 21.4346 23.1369 21.4526 23.2082 21.4525H25.95C30.7503 21.4525 36.3022 23.7091 36.3022 29.228C36.3009 30.4878 35.8055 31.6956 34.9248 32.5864C34.0441 33.4772 32.8499 33.9783 31.6044 33.9797C31.0637 33.9793 30.5291 33.8637 30.0355 33.6405C29.5419 33.4172 29.1004 33.0912 28.7396 32.6838C28.6211 32.5581 28.5287 32.4097 28.4679 32.2472C28.4072 32.0848 28.3794 31.9116 28.3861 31.7381C28.3928 31.5646 28.434 31.3942 28.5071 31.237C28.5802 31.0799 28.6838 30.9392 28.8117 30.8233C28.9397 30.7075 29.0893 30.6188 29.2518 30.5627C29.4143 30.5065 29.5862 30.4839 29.7575 30.4962C29.9288 30.5086 30.0959 30.5557 30.2488 30.6346C30.4017 30.7136 30.5374 30.8228 30.6478 30.9559C30.7684 31.0916 30.9159 31.2003 31.0807 31.2747C31.2455 31.3491 31.4239 31.3876 31.6044 31.3878C32.1705 31.3869 32.7131 31.1591 33.1134 30.7542C33.5136 30.3494 33.7389 29.8005 33.7398 29.228C33.7227 28.5668 33.493 27.9292 33.0855 27.412C30.6085 24.0737 25.6254 27.1718 25.6254 30.9524C25.6254 34.733 28.1879 37 32.4586 37C38.0652 37 41 29.1779 41 21.4491C41 12.1807 36.4782 6.65837 28.263 5.90156Z" fill="#0F1046"/>
                                        <path d="M8.5 17C10.433 17 12 15.433 12 13.5C12 11.567 10.433 10 8.5 10C6.567 10 5 11.567 5 13.5C5 15.433 6.567 17 8.5 17Z" fill="white"/>
                                        <path d="M8.5 15C9.32843 15 10 14.3284 10 13.5C10 12.6716 9.32843 12 8.5 12C7.67157 12 7 12.6716 7 13.5C7 14.3284 7.67157 15 8.5 15Z" fill="#2A2B8D"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="40" height="40" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>
                            <span className={"imageBold"}><b>image</b> search</span>
                            <div className={"searchArea"}>
                                <form action="">
                                    <input type="text" name="" id="" placeholder="Query"/> <br/>
                                    <select className={"categorySelect"} name="">
                                        <option selected disabled >Collections</option>
                                        <option value="saab">Featured</option>
                                        <option value="fiat">Wallpapers</option>
                                        <option value="audi">Nature</option>
                                        <option value="audi">Text & Patterns</option>
                                        <option value="audi">Architecture</option>
                                    </select>
                                </form>
                            </div>

                            <div className="searchButton">
                                SEARCH
                            </div>
                        </header>

                    </div>
                </div>


        );
    }
}

export default Home;







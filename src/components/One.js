import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';


const One = () => (
    <div className="container-fluid">
        <div className="one" >
            <p style={{ margin: '0 auto', paddingTop: '300px' }} className="text">Оne</p>

            <style jsx>
                {`
    .one{
        background-image:url('https://globetrender.com/wp-content/uploads/2020/05/Caribbean-beach.jpg');
    }

    .img1{
        background-image:url('https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg');
        width:100%;
        height:100%;
    }
    .img2{
        background-image:url('https://wallpapercave.com/wp/wp5776713.jpg');
        width:100%;
        height:600px;
    }
    .img3{
        background-image:url('https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg');
        width:100%;
        height:100%;
    }
    `}
            </style>
        </div>

        <div className="two">


            <Splide>
                <SplideSlide>
                    {/* <img src="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg" alt=" 1" /> */}
                    <div className="img1">
                        <span className="text text--color">change background color in SCSS file</span>

                    </div>
                </SplideSlide>
                <SplideSlide>

                    <div className="img2">
                        <span className="text text--color">change in color</span>

                    </div>
                </SplideSlide>

                <SplideSlide>

                    <div className="img3">
                        <span className="text text--color">change in color</span>

                    </div>
                </SplideSlide>
            </Splide>

        </div>


        <div className="video">
            <iframe align="right" width="320" height="258" src="https://www.youtube.com/embed/xImIo1bQ88U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

    </div>
)
export default One
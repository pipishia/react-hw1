import Header from "../components/header/header"
import Image from "../components/images/images"
import Description from "../components/text/text"
import Footer from "../components/footer/footer"
import { useImages } from "../react-query";
function Home() {

    const { data, isLoading } = useImages();
  const images = data || [];

    return (
        <div className="container mainLayout">
            <Header
                className="layoutHeader"
                titie="photoweb"
                slogan="K's Web"
            />
            <Image
                images={images}
                isLoading={isLoading}
                className="layoutImage"
            />
            <Description className="layoutDescription" />
            <Footer className="layoutFooter" />
        </div>
    );
}

export default Home;

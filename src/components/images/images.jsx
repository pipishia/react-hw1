import { Row, Col } from "antd";
import images from "../json/images.json"
export default function Image() {
    return (
     
<article className="image__layout py-3 py-sm-5">
<div className="container">
    <h1 className="text-center">IMAGES</h1>
    <hr className="divider--dark" />
    
        <Row gutter={[32, 32]}>
            {images.map(image => (
                <Col key={image.id}
                sm={{span:12}}
                lg={{span:8}}
                xl={{span:6}}
                >
                        <div>
                            <a href="" className="image__link">
                                <img src={image.link} alt="" className="image__style" />
                            </a>
                            <p className="image_title">{image.name}</p>
                        </div>
                        </Col>
                    ))}
                
                
        </Row>



   
</div>
</article>
    );
}


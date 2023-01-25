import Carousel from 'react-bootstrap/Carousel';

function BannerTransition () {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-50 rounded mx-auto d-block"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/3f6c2931355221.564cc5415a79d.jpg"
          alt="First slide"
          
        //   style="height: 20em"
        
        />
        <Carousel.Caption>
          <h3 className='text-body'>First slide label</h3>
          <p className='text-body'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 rounded mx-auto d-block"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/3f6c2931355221.564cc5415a79d.jpg"
          alt="Second slide"
          
        />

        <Carousel.Caption>
          <h3 className='text-body'>Second slide label</h3>
          <p className='text-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 rounded mx-auto d-block"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/3f6c2931355221.564cc5415a79d.jpg"
          alt="Third slide"
          
        />

        <Carousel.Caption>
          <h3 className='text-body'>Third slide label</h3>
          <p className='text-body'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
  );
}

export default BannerTransition;
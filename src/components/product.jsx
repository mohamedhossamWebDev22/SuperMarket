import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Product(props) {
  return (
    <Card className='m-2 p-2'>
      <Card.Img classname="p-5" variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.txt} EGP
        </Card.Text>
        <Button variant="success">Buy Now!</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
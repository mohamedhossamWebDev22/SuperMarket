import Card from 'react-bootstrap/Card';

function CardD(props) {
  return (
    <Card className='m-2 p-2'>
      <Card.Img classname="p-5" variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.txt}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardD;
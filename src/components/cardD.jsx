import Card from 'react-bootstrap/Card';

function CardD(props) {
  return (
    <Card className='m-md-2 m-1 p-md-2 p-1 fs-md-2 fs-lg-3'>
      <Card.Img classname="p-5" variant="top" src={props.img} />
      <Card.Body>
        <Card.Title className="text-bold">{props.title}</Card.Title>
        <Card.Text className='fs-md-4 fs-6'>
          {props.txt}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardD;
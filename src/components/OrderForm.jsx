
import Pizza from "./Pizza"
import "./order.css"
import { Form, FormGroup, Label, Input, Col, Card, ButtonGroup, Button, CardTitle, CardText } from 'reactstrap';
const OrderForm = () =>{
    const ekMalzemeler = [
        "Pepperoni",
        "Domates",
        "Biber",
        "Sosis",
        "Misir",
        "Sucuk",
        "Kanada Jambonu",
        "Kekik",
        "Ananas",
        "Tavuk Izgara",
        "Jalepano",
        "Kabak",
        "Sogan",
        "Sarimsak",
      ];

  initialData={
        title: "",
        price: 0,
        description:"",
        rate: "",
        comment:"",
        pizzaSize:"",
        thickness:"",
        ekMalzemeler:[],
        siparisNotu:"",
        totalPrice:0
   }
   const [formData, setFormData] = useState(initialData);

return(

<div className="page-container">
<section className="pizza-info-section">
<Pizza/>
</section>
<section className="form-section">
 <Form >
 <FormGroup className="pizza-size" >
  <Col>
    <Label for="radio">Boyut Seç</Label>
  </Col>
  <Col>
    <Input className="pizza-size-input" type="radio" id="kücük" name="pizzaSize" value="kücük" />
    <Label>Küçük</Label>
  </Col>
  <Col>
    <Input className="pizza-size-input" type="radio" id="orta" name="pizzaSize" value="orta" />
    <Label>Orta</Label>
  </Col>
  <Col>
    <Input className="pizza-size-input" type="radio" id="büyük" name="pizzaSize" value="büyük" />
    <Label>Büyük</Label>
  </Col>
</FormGroup>
    <FormGroup>
          <Label>Hamur Kalınlığı</Label>
          <Input
            type="select"
            name="thickness"
            id="thickness"
          >
            <option value="İnce">İnce</option>
            <option value="Kalın">Kalın</option>
            <option value="Orta">Orta</option>
          </Input>
    </FormGroup>
   
    <FormGroup className="ek-malzemeler-form">
        <div className="ek-malzemeler">
        <Label >Ek Malzemeler</Label>
          <span className="ek-malzemeler-text">
            En Fazla 10 malzeme secebilirsiniz. 5₺
          </span>
          <div className="ek-malzemeler-secici">
            {ekMalzemeler.map((malz, i) => (
              <div className="malzeme">
                <input
                  id={`ekMalzeme-${i}`}
                  type="checkbox"
                  name={malz}
                  key={i}
                />
                <label  htmlFor={`ekMalzeme-${i}`}>
                  {malz}
                </label>
              </div>
            ))}
          </div>
          </div>
</FormGroup>

<FormGroup>
    <Label>
     Ad Soyad
    </Label>
    <Input 
    className="name"
      id="name"
      name="name"
      placeholder="İsminizi giriniz"
      type="text"
    />
  </FormGroup>
<FormGroup>
  <Label>Sipariş Notu</Label>
  <Input 
  className="siparis-notu"
  type="textarea"
  name="siparisNotu"
   id="siparisNotu"
   placeholder="Eklemek istediğin not var mı?" />
</FormGroup>
</Form>
</section>
 <section className="siparis-section">
          <ButtonGroup>
            <Button className="dec" >-</Button>
            <div className="counter">sati gir</div>
            <Button className="inc" >+</Button>
          </ButtonGroup>
          <Card className="siparis-box">
            <div className="siparis-container">
              <div className="siparis">
                <CardTitle>Siparis Toplami</CardTitle>
                <CardText>Seçimler</CardText>
                <CardText>Toplam</CardText>
              </div>
            </div>
            <div className="submit-button">
                <Button className="order-button"  color="warning" type="submit">Siparis Ver</Button>
            </div>
            </Card>
            
 </section>
</div>

)
}
export default OrderForm
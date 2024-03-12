import Pizza from "./Pizza";

import "./order.css";
import { useEffect, useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  ButtonGroup,
  Button,
  CardTitle,
  CardText,
  FormText,
} from "reactstrap";

const OrderForm = () => {
  const ekMalzemeler = [
    "Pepperoni",
    "Domates",
    "Biber",
    "Sosis",
    "Misir",
    "Sucuk",
    "Kanada Jambonu",
    "Ananas",
    "Tavuk Izgara",
    "Jalepano",
    "Kabak",
    "Sogan",
    "Sarimsak",
    "Kekik",
  ];
  const [ekMalzemelerFiyat, setEkMalzemelerFiyat] = useState(0);
  const [isValid, setIsValid] = useState(false);
  const [form, setForm] = useState({
    size: "",
    thickness: "",
    ekMalzeme: [],
    fullname: "",
    siparisNotu: "",
    count: 1,
    price: 85.5,
  });
 
 
  const handleChange = (event) => {
    let eklenenMalzemeler;
    let { name, value, type, checked } = event.target;
    const newState = { ...form, [name]: value };
    setForm(newState);
    if (type === "checkbox") {
      if (checked) {
        eklenenMalzemeler = [...form.ekMalzeme, value];
        setEkMalzemelerFiyat((fiyat) => fiyat + 5);
      } else {
        eklenenMalzemeler = form.ekMalzeme.filter((item) => item !== value);
        setEkMalzemelerFiyat((fiyat) => fiyat - 5);
      }
      setForm({ ...form, ["ekMalzeme"]: eklenenMalzemeler });
      validForm({ ...form, ["ekMalzeme"]: eklenenMalzemeler });
    } else if (type === "radio" && checked) {
      setForm({ ...form, [name]: value });
      validForm({ ...form, [name]: value });
    } else {
      setForm({ ...form, [name]: value });
      validForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("https://reqres.in/api/pizza", form)
      .then((response) => {
        console.log("API Response:", response.data);
        setForm(initialForm);
      })
      .catch((error) => {
        console.error("API Request Error:", error);
      });
  };

  const handleIncrease = (event) => {
    event.preventDefault();
    setForm((prevData) => ({ ...prevData, count: prevData.count + 1 }));
  };

  const handleDecrease = (event) => {
    event.preventDefault();
    if (form.count > 1) {
      setForm((prevData) => ({
        ...prevData,
        count: prevData.count - 1,
      }));
    }
  };

  const validForm = (form) => {
    const isNameValid = form.fullname.length >= 3;
    const isMaterialNumValid =
      form.ekMalzeme.length >= 4 && form.ekMalzeme.length <= 10;
    const isSizeSelected = form.size !== "";
    const isThicknessSelected = form.thickness !== "";
    setIsValid(
      isNameValid && isMaterialNumValid && isSizeSelected && isThicknessSelected
    );
  };


  const [totalUcret, setTotalUcret] = useState(form.price);
  const [totalekMalzemelerFiyat, setTotalekMalzemelerFiyat] = useState(ekMalzemelerFiyat)
  useEffect(() => {
    setTotalekMalzemelerFiyat(ekMalzemelerFiyat*form.count)
    setTotalUcret((form.price + ekMalzemelerFiyat) * form.count);
  }, [form.count, form.ekMalzeme]);



  return (
    <div className="page-container">
      <section className="pizza-info-section">
        <Pizza />
      </section>
      <section className="form-section">
        <Form onSubmit={handleSubmit}>
          <div className="boyut-hamur-form">
            <FormGroup className="pizza-size">
              <span for="radio">Boyut Seç</span>
              <Label for="kücük">
                <Input
                  className="pizza-size-input"
                  type="radio"
                  id="kücük"
                  name="size"
                  value="kücük"
                  onChange={handleChange}
                  checked={form.size == "kücük"}
                />
                Küçük
              </Label>
              <Label for="orta">
                <Input
                  className="pizza-size-input"
                  type="radio"
                  id="orta"
                  name="size"
                  value="orta"
                  onChange={handleChange}
                  checked={form.size == "orta"}
                />
                Orta
              </Label>
              <Label for="büyük">
                <Input
                  className="pizza-size-input"
                  type="radio"
                  id="büyük"
                  name="size"
                  value="büyük"
                  onChange={handleChange}
                  checked={form.size == "büyük"}
                />
                Büyük
              </Label>
            </FormGroup>

            <FormGroup className="pizza-thickness">
              <span>Hamur Seç</span>
              <Input
                type="select"
                name="thickness"
                id="thickness"
                value={form.thickness}
                onChange={handleChange}
              >
                <option>Hamur Kalınlığı Seç</option>
                <option>İnce</option>
                <option>Kalın</option>
                <option>Orta</option>
              </Input>
            </FormGroup>
          </div>

          <FormGroup className="ek-malzemeler-form">
            <div className="ek-malzemeler">
              <span>Ek Malzemeler</span>
              <FormText className="ek-malzemeler-text">
                En Fazla 10 malzeme secebilirsiniz. 5₺
              </FormText>
              <div className="ek-malzemeler-secici">
                {ekMalzemeler.map((material, i) => (
                  <div className="malzeme">
                    <input
                      id={`ekMalzeme-${i}`}
                      type="checkbox"
                      name="material"
                      value={material}
                      key={i}
                      onChange={handleChange}
                      checked={form.ekMalzeme.includes(material)}
                    />
                    <label htmlFor={`ekMalzeme-${i}`}> {material}</label>
                  </div>
                ))}
              </div>
            </div>
          </FormGroup>

          <FormGroup>
            <Label className="form-baslik" for="fullname">
              Ad Soyad
            </Label>
            <Input
              className="fullname"
              id="fullname"
              name="fullname"
              placeholder="İsminizi giriniz"
              type="text"
              onChange={handleChange}
              value={form.fullname}
            />
          </FormGroup>
          <FormGroup>
            <Label className="form-baslik">Sipariş Notu</Label>
            <Input
              className="siparis-notu"
              type="text"
              name="siparisNotu"
              id="siparisNotu"
              placeholder="Eklemek istediğin not var mı?"
              onChange={handleChange}
              value={form.siparisNotu}
            />
          </FormGroup>

          <div className="siparis-section">
            <ButtonGroup className="button-group">
              <Button className="dec" onClick={handleDecrease}>
                -
              </Button>
              <div className="counter">{form.count}</div>
              <Button className="inc" onClick={handleIncrease}>
                +
              </Button>
            </ButtonGroup>
            <Card className="siparis-box">
              <div className="siparis-container"> 
                <div className="siparis">
                  <CardTitle>Siparis Toplami</CardTitle>
                  <CardText>Seçimler{totalekMalzemelerFiyat}</CardText>
                  <CardText>Toplam {totalUcret}</CardText>
                </div>
              </div>
              <div className="submit-button">
                <Button
                  className="order-button"
                  color="warning"
                  type="submit"
                  disabled={!isValid}
                  onClick={handleSubmit}
                >
                  Sipariş Ver
                </Button>
              </div>
            </Card>
          </div>
        </Form>
      </section>
    </div>
  );
};
export default OrderForm;

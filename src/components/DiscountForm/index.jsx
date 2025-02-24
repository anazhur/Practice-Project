import React, { useState } from "react";
import discountFormImg from "../../media/discount_form_img.png";
import s from "./index.module.css";


export default function DiscountForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // Получаем имя и значение поля
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Обновляем нужное поле
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Отключаем стандартное поведение формы

    try {
      // Здесь выполняется отправка данных на сервер
      const response = await fetch("http://localhost:3333/sale/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Преобразуем объект в строку JSON
      });

      if (!response.ok) {
        throw new Error("Ошибка при отправке данных");
      }

      // Если успешно, очищаем форму
      setFormData({
        name: "",
        phone: "",
        email: "",
      });
      alert("Данные успешно отправлены!");
    } catch (error) {
      console.error(error.message);
      alert("Не удалось отправить данные. Попробуйте снова.");
    }
  };

  return (
    <div className={s.container}>
      <h2>5% off on the first order</h2>
      <div>
        <div className={s.img_container}>
          <img src={discountFormImg} alt="gardening" />
        </div>

        <div className={s.form_container}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              placeholder="Phone number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <button type="submit">Get a discount</button>
          </form>
        </div>
      </div>
    </div>
  );
}

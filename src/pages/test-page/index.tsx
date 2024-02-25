import { useState } from "react";

// 取得するJSONオブジェクトの型
type Food = {
  name: string;
  description: string;
  price: number;
}

export default function Home() {
  // 食事のオブジェクトを格納するやつ
  const [foods, setFoods] = useState<Food[] | null>(null);

  // ボタンを押した時に発火する関数
  const onSubmit = async (): Promise<void> => {
    try {
      const res = await fetch('/api/foods')
      .then(res => res.text())
      .then(food => {
        setFoods(JSON.parse(food))
      })
    } catch (err) {
      alert(err)
    }
  }

  return (
    <>
      <button type="submit" onClick={onSubmit}>取得</button>
      <ul>
        {foods ? foods.map((food: Food) => (
          <li key={food.name}>
            <p>
              商品名: {food.name}<br />
              説明: {food.description}<br />
              値段: {food.price}
            </p>
          </li>
        )) : <p>データなし</p>}
      </ul>
    </>
  )
}
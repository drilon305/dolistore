import React, { useState } from 'react'
import "./Product.scss"

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0)
  const [qty, setQty] = useState(0)

  const images = [
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/0d2eef8f-dc1d-4d9f-a14d-8604cc80d3d0/sportswear-premium-essentials-mens-t-shirt-mkhTvc.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/44c8ea23-6fb6-49c9-af6d-48f79ccef8c0/sportswear-premium-essentials-mens-t-shirt-mkhTvc.png"
  ]


  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="1" onClick={e=> setSelectedImg(0)} />
          <img src={images[1]} alt="2" onClick={e=> setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span>$199</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Quos obcaecati laborum similique illo dicta hic perferendis debitis laboriosam porro maiores!</p> 
        <div className="quantity">
          <button>-</button>
          {qty}
          <button>+</button>
        </div>
      </div>
    </div>
  )
}

export default Product
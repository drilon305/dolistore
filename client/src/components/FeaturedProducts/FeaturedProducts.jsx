import "./FeaturedProducts.scss";
import Card from "../Card/Card"

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/806627/pexels-photo-806627.jpeg?auto=compress&cs=tinysrgb&w=600",
      img2: "https://images.pexels.com/photos/806627/pexels-photo-806627.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Long Sleeve Graphic T-Shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 1,
      img: "https://images.pexels.com/photos/3651597/pexels-photo-3651597.jpeg?auto=compress&cs=tinysrgb&w=600",
      img2: "https://images.pexels.com/photos/3651597/pexels-photo-3651597.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Coat",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 1,
      img: "https://images.pexels.com/photos/3053824/pexels-photo-3053824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/3053824/pexels-photo-3053824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Long Sleeve Graphic T-Shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 1,
      img: "https://images.pexels.com/photos/1917611/pexels-photo-1917611.jpeg?auto=compress&cs=tinysrgb&w=600",
      img2: "https://images.pexels.com/photos/1917611/pexels-photo-1917611.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Long Sleeve Graphic T-Shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
          recusandae nostrum magni, placeat dolore aspernatur. Doloribus
          architecto expedita velit animi.
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
            <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;

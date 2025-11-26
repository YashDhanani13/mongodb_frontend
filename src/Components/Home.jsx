import "./Home.css";

const Home = () => {
  const items = [
    {
      id: 1,
      name: "Lion",
      image: "/images/lion.jpg",
      description: "The lion is known as the king of the jungle."
    },
    {
      id: 2,
      name: "Elephant",
      image: "/images/elephant.jpg",
      description: "Elephants are the largest land animals on Earth."
    },
    {
      id: 3,
      name: "Tiger",
      image: "/images/tiger.jpg",
      description: "Tigers are strong and beautiful wild animals."
    }
  ];

  return (
    <div className="home-container">
      <h1 className="home-title">Animal Cards</h1>

      <div className="card-wrapper">
        {items.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.name} className="card-img" />

            <h2 className="card-title">{item.name}</h2>

            <p className="card-desc">{item.description}</p>

            <button className="card-btn">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

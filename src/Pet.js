const Pet = ({ name, animal, breed, id, images, location, description }) => {
  const hero = images[0] || "http://pet-images.dev-apis.com/pets/none.jpg";

  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default Pet;

import React from "react";

const List = ({ people, removeFunction }) => {
  return (
    <div>
      <h1 className="main-title">birthday remainder</h1>
      <section className="container">
        <h1 className="title">
          <span>{people.length}</span> Birthday Remaining
        </h1>

        {people.map((item) => {
          const { id, age, name, img } = item;
          return (
            <div className="details" key={id}>
              <div className="img-container">
                <img src={img} alt={name} className="person-img" />
              </div>
              <div className="details-container">
                <h2>{name}</h2>
                <span>{age} years old</span>
              </div>

              <button type="button" onClick={() => removeFunction(id)}>
                delete
              </button>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default List;

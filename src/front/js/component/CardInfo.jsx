import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardInfo = () => {
  const { store, actions } = useContext(Context);
  const [itemInfo, setItemInfo] = useState();
  const params = useParams();
  const properties = [
    "gender",
    "hair_color",
    "height",
    "birth_year",
    "skin_color",
    "eye_color",
    "climate",
    "population",
    "orbital_period",
    "rotation_period",
    "diameter",
    "cargo_capacity",
    "consumables",
    "cost_in_credits",
    "created",
    "crew",
    "edited",
    "length",
    "manufacturer",
  ];
  const img_character = `https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`;
  const img_vehicle = `https://starwars-visualguide.com/assets/img/vehicles/${params.id}.jpg`;
  const img_planet = `https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`;
  async function info(id, type) {
    const data = await actions.getCardInfo(id, type);
    setItemInfo(data);
  }

  useEffect(() => {
    info(params.id, params.type);
  }, []);

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between">
        {itemInfo === undefined ? (
          <div>Loading...</div>
        ) : (
          <>
            {
              params.type === ("") ? (
                <img
                  src={img_character}
                  height="400px"
                  width="300px"
                  alt="..."
                />
              ) : (
                <img src={img_planet}
                 height="400px"
                 width="300px"
                 alt="..." />
              ) === (
                <img src={img_vehicle}
                    height="400px"
                    width="300px"
                    alt="..." />
              )
            }            
            <div className="ms-5">
              <h1>{itemInfo.name}</h1>
              <hr></hr>
              <div className="d-flex flex-wrap mt-5">
                {Object.keys(itemInfo).map((key) => {
                  if (properties.includes(key)) {
                    return (
                      <div className="mx-4">
                        <h3 className="text-danger">{key}</h3>
                        <p className="text-center">{itemInfo[key]}</p>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </>
        )}
      </div>
      <Link
        to="/"
        className="mt-4 btn btn-danger btn-lg fas fa-backward fa-1.5x">
        &nbsp; Home
      </Link>
    </div>
  );
};

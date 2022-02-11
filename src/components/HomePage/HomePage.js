import React, { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import { Button, Card } from "react-bootstrap";
import Grid from "@mui/material/Grid";

export default function HomePage() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardData, setCardData] = useState(null);
  const [search, setSearch] = useState("");

  // useEffect function
  useEffect(() => {
    //removed async here
    const url = "https://rickandmortyapi.com/api/character";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setCardData(json.results);
        console.log(json.results);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleSave = (card) => {
    let characters = [];
    let prevChars = JSON.parse(localStorage.getItem("characters"));

    //If a Character is already Saved.
    if (prevChars) {
      const isAlreadyPresent = prevChars.find((c) => c.id === card.id);
      if (isAlreadyPresent) {
        return alert("Character Already Saved.");
      } else characters = prevChars;
    }
    characters.push(card);
    localStorage.setItem("characters", JSON.stringify(characters));
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Grid item xs={12} sx={{ my: 4 }}>
        <input placeholder="Search" onChange={handleSearch} />
      </Grid>
      <Grid container xs={12} spacing={2}>
        {cardData &&
          cardData
            .filter((c) => {
              return c.name.toLowerCase().includes(search.toLowerCase());
            })
            .map((c) => {
              return (
                <Grid item key={c.id}>
                  <ReactCardFlip
                    isFlipped={isFlipped}
                    flipDirection="verrtical"
                  >
                    <Card>
                      <Card.Img
                        variant="top"
                        src={c.image}
                        height="300px"
                        width="300px"
                      />
                      <Card.Body>
                        <Card.Title>{c.name}</Card.Title>
                        <Card.Text>{c.species}</Card.Text>
                        <Button
                          style={{ marginRight: "4px" }}
                          variant="success"
                          onClick={() => handleSave(c)}
                        >
                          Save
                        </Button>
                        <Button variant="primary" onClick={handleClick}>
                          View Details
                        </Button>
                      </Card.Body>
                    </Card>
                    <Card style={{ width: "300px", height: "300px" }}>
                      <Card.Body>
                        <Card.Title>Character Details</Card.Title>
                        <Card.Text>Name : {c.name}</Card.Text>
                        <Card.Text>Status : {c.status}</Card.Text>
                        <Card.Text>Gender : {c.gender}</Card.Text>
                        <Card.Text>Species : {c.species}</Card.Text>

                        <Button variant="primary" onClick={handleClick}>
                          View Image
                        </Button>
                      </Card.Body>
                    </Card>
                  </ReactCardFlip>
                </Grid>
              );
            })}
      </Grid>
    </>
  );
}

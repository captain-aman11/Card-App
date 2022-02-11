import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Button, Card } from "react-bootstrap";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
function SavedCards() {
  const [isFlipped, setIsFlipped] = useState(false);

  const [cardData, setCardData] = useState(
    JSON.parse(localStorage.getItem("characters"))
  );

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleDelete = (card) => {
    if (!card) return alert("Character not Found.");
    let characters = cardData.filter((c) => c.id !== card.id);
    setCardData(characters);
    localStorage.setItem("characters", JSON.stringify(characters));
  };

  return (
    <>
      <Grid container spacing={2}>
        {(!cardData || cardData.length === 0) && (
          <Typography variant="h1" sx={{ my: 6, mx: 2 }}>
            No Saved Cards.
          </Typography>
        )}
        {cardData &&
          cardData.map((c) => {
            return (
              <Grid item key={c.id}>
                <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
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
                        variant="danger"
                        onClick={() => handleDelete(c)}
                      >
                        Delete
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

export default SavedCards;

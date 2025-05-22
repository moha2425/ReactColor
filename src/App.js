import { useState } from "react";
import { Button, Typography, Grid } from "@mui/material";

function App() {
  const [color, setColor] = useState("red");
  const [lang, setLang] = useState("en");

  /*const colorCode = {
    red: "#F00",
    orange: "#F70",
    yellow: "#FF0",
    green: "#0F0",
    blue: "#00F",
    purple: "#90F",
    pink: "#F07",
    brown: "#950",
  };*/

  const colorNamesCode = {
    red: {
      en: "Red",
      fr: "Rouge",
      code: "#F00",
    },
    orange: {
      en: "Orange",
      fr: "Orange",
      code: "#F70"
    },
    yellow: {
      en: "Yellow",
      fr: "Jaune",
      code: "#F00"
    },
    green: {
      en: "Green",
      fr: "Vert",
      code: "#F00"
    },
    blue: {
      en: "Blue",
      fr: "Bleu",
      code: "#F00"
    },
    purple: {
      en: "Purple",
      fr: "Violet",
      code: "#F00"
    },
    pink: {
      en: "Pink",
      fr: "Rose",
      code: "#F00"
    },
    brown: {
      en: "Brown",
      fr: "Marron",
      code: "#F00"
    },
  };

  return (
    <Grid container>
      <Grid
        item
        size={6}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Button
          sx={{ width: "100%" }}
          onClick={() => setLang("en")}
          variant={lang === "en" ? "contained" : "outlined"}
        >
          english
        </Button>
      </Grid>

      <Grid
        item
        size={6}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Button
          sx={{ width: "100%" }}
          onClick={() => setLang("fr")}
          variant={lang === "fr" ? "contained" : "outlined"}
        >
          français
        </Button>
      </Grid>
      {Object.keys(colorNamesCode).map((c) => (
        <Grid item size={{xs:4, md:3, lg:2}}>
          <Button
            variant="contained"
            sx={{ backgroundColor: colorNamesCode[c]["code"] }}
            onClick={() => setColor(c)}
          >
            {c}
          </Button>
        </Grid>
      ))}
      <Typography variant="h3" sx={{color: color}}>
        {colorNamesCode[color][lang]}
      </Typography>
    </Grid>
  );
}

export default App;

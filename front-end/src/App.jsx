import React from "react";
import fetch from "cross-fetch";
import { useState } from "react";
import { Box, Heading, Text, Flex, Button } from "rebass";

export default function App() {
  const [textexport, setTextexport] = useState("")
  const [textimport, setTextimport] = useState("")
  var addData = async () => {
    try {
      const res = await fetch("http://localhost:4000/database", {
        method: "POST",
        body: JSON.stringify({
          name: textexport
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" }
      });

      if (res.status >= 400) {
        throw new Error("Bad response from server");
      }

      const user = await res.json();

      console.log(user);
    } catch (err) {
      console.error(err);
    }
  };

  var getData = async () => {
    try {
      const res = await fetch("http://localhost:4000/database2");
      setTextimport(res)
      if (res.status >= 400) {
        throw new Error("Bad response from server");
      }

      const user = await res.json();

      console.log(user);
    } catch (err) {
      console.error(err);
    }
  };
  const onChangeHandler = event => {
    setTextexport(event.target.value);
    console.log(textexport);
  };

  return (
    <Box
      pb={4}
      mt={4}
      pt="0.5px"
      sx={{
        borderRadius: "16px",
        boxShadow: "1px 0px 5px 1px rgba(0, 0, 0, 0.1)"
      }}
      mx={3}
    >
      <Box m={4} textAlign="start" width={3 / 5}>
        <Heading mb={3} color='#1A59C2'>Final devtool</Heading>
        <Flex>
          <input
            type="text"
            name="name"
            onChange={onChangeHandler}
          />
        </Flex>
        <Flex mt={3}>
          <Button
            onClick={() => addData()}
            sx={{
              borderRadius: "10px",
              backgroundColor: "#fff",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #206ED1",
              fontSize: 2,
            }}
            alignContent="flex-start"
            textAlign="start"
            mb={2}
            pr={"20px"}
            pl={2}
            color='#1A59C2'>
            Add data

          </Button>

          <Button
            onClick={() => getData()}
            sx={{
              borderRadius: "10px",
              backgroundColor: "#fff",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #206ED1",
              fontSize: 2,
            }}
            alignContent="flex-start"
            textAlign="start"
            mb={2}
            ml={2}
            pr={"20px"}
            pl={2}
            color='#1A59C2'>
            Get data

          </Button>
        </Flex>
      </Box>
    </Box>
  );
}
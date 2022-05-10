import React from "react";
import fetch from "cross-fetch";
import { useState } from "react";
import { Box, Heading, Text, Flex, Button, Image } from "rebass";
import { Label, Select } from '@rebass/forms'

export default function App() {
  const [vaccinationcenter, setVaccinationcenter] = useState("")
  const [textimport, setTextimport] = useState("")
  const [name, setName]= useState("")
  const [surname, setSurname] = useState("")
  var addData = async () => {
    try {
      const res = await fetch("http://localhost:4000/database", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          surname: surname
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


  const onChangeVaccinationcenter = event => {
    setVaccinationcenter(event.target.value);
  };
  const onChangeName = event => {
    setName(event.target.value);
    console.log(name);
  };
  const onChangeSurname = event =>{
    setSurname(event.target.value)
  }
  

  return (
    <Box>
      <Image width={1} src="https://service.truecorp.co.th/red/cdn/cvvs/CVC_webRegis_Header%201.png"/>
    <Box
      pb={4}
      px="20px"
      mt={4}
      pt="0.5px"
      sx={{
        fontFamily: "sans-serif",
        borderRadius: "16px",
        boxShadow: "1px 0px 5px 1px rgba(0, 0, 0, 0.1)"
      }}
      mx={3}
    >
      <Box m={4} textAlign="center" width={4 / 5}>
        <Heading mb={2}
          sx={{
            fontSize: "28px",
            fontFamily: "sans-serif"
          }}
          color='red'>ลงทะเบียนฉีดวัคซีน</Heading>
        <Heading mb={3}
          sx={{
            fontSize: "32px",
            fontFamily: "sans-serif",
            float:"left"
          }}
          color='red'>Register to be Vaccinated</Heading>

        <Text mb={3}>คุณสามารถลงทะเบียนได้ 2 ท่าน</Text>
        <Text>Registration limit to 2 persons/number</Text>
      </Box>
      <Box m={3} textAlign="start" width={4 / 5}>
        <Text sx={{
          fontSize: "bold"
        }}>ศูนย์ฉีดวัคซีน*</Text>
        <Text mb={3}>Vaccination Center*</Text>
        <Select

          id='vaccinationcenter'
          name='vaccinationcenter'
          sx={{
            borderRadius: "10px",
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid gray",
            color: "gray"
          }}
          pl={3}

          onChange={onChangeVaccinationcenter}
          defaultValue='กรุณาเลือกศูนย์ฉีดวัคซีน'>
          <option>
            กรุณาเลือกศูนย์ฉีดวัคซีน
          </option>
          <option>
            ศูนย์ฉีดวัคซีนกลางบางซื่อ (Centralize Vaccination Center)
          </option>
        </Select>
      </Box>
      <Box m={4} textAlign="start" width={4 / 5}>
        <Text>เข็ม3 สำหรับบุคคลทั่วไปและชาวต่างชาติ ที่เคยได้รับวัคซีนครบ 2เข็ม ตามเงื่อนไขดังนี้
          - Sinovac/Sinopharm 2เข็ม ครบ 30วัน
          - Sinovac/Sinopharm + AstraZeneca ครบ 90วัน
          - Sinovac/Sinopharm + Pfizer ครบ 90วัน
          - AstraZeneca 2เข็ม ครบ 90วัน
          - Moderna เข็มที่2 ครบ 90วัน
          สถานีกลางบางซื่อ: วัคซีน Pfizer
          3rd dose for general public and foreigners who have received 2 dose from this condition as follows
          - Sinovac/Sinopharm is not less than 30days from the 2nd dose date
          - Sinovac/Sinopharm + AstraZeneca is not less than 90days from the 2nd dose date
          - Sinovac/Sinopharm + Pfizer is not less than 90days from the 2nd dose date
          - AstraZeneca is not less than 90days from the 2nd dose date
          - Moderna is not less than 90days form the 2nd dose date
          Bangsue CVC: Pfizer</Text>
      </Box>

      <Text textAlign="start" mb={1}>คำนำหน้าชื่อ</Text>
      <Text textAlign="start" mb={2}>Name Title*</Text>
        <Select
          id='vaccinationcenter'
          name='vaccinationcenter'
          sx={{
            borderRadius: "10px",
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid gray",
            color: "gray"
          }}
          pl={3}
          mr={1}
          mb={4}
          onChange={onChangeVaccinationcenter}
          defaultValue='Please indentifty name title'>
          <option>
            Please indentifty name title
          </option>
          <option>
            นาย/Mr
          </option>
          <option>
            นาง/Mrs
          </option>
          <option>
            นางสาว/Ms
          </option>
          <option>
            เด็กชาย
          </option>
          <option>
            เด็กหญิง
          </option>
        </Select>

        <Text textAlign="start" mb={1}>เพศ</Text>
      <Text textAlign="start" mb={2}>gender*</Text>
        <Select

          id='vaccinationcenter'
          name='vaccinationcenter'
          sx={{
            borderRadius: "10px",
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid gray",
            color: "gray"
          }}
          pl={3}
          mb={4}
          onChange={onChangeVaccinationcenter}
          defaultValue='กรุณาเลือกศูนย์ฉีดวัคซีน'>
          <option>
            ชาย
          </option>
          <option>
            หญิง
          </option>
        </Select>

        <Text textAlign="start" mb={1}>ชื่อ</Text>
      <Text textAlign="start" mb={2}>Name</Text>
        <Flex

          id='vaccinationcenter'
          name='vaccinationcenter'
          sx={{
            borderRadius: "10px",
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid gray",
            color: "gray"
          }}
          pl={3}
          mb={4}
          >
            
          <input
          style={{border:"0",outline:"0"}}
            type="text"
            name="name"
            onChange={onChangeName}
          />
        

        </Flex>

        <Text textAlign="start" mb={1}>นามสกุล</Text>
      <Text textAlign="start" mb={2}>Surname*</Text>
        <Flex

          id='vaccinationcenter'
          name='vaccinationcenter'
          sx={{
            borderRadius: "10px",
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid gray",
            color: "gray"
          }}
          pl={3}
          
        >
          <input
          style={{border:"0",outline:"0"}}
            type="text"
            name="name"
            onChange={onChangeSurname}
          />
        </Flex>
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
            alignContent="center"
            textAlign="center"
            mb={2}
            ml={2}
            pr={"20px"}
            pl={2}
            color='#1A59C2'>
            ยืนยันข้อมูล

          </Button>

    </Box>
    </Box>
  );
}
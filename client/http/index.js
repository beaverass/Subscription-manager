// import {useEffect, useState} from "react";
// import axios from "axios";
//
// const [subscriptions, setSubscriptions] = useState([])
// useEffect(async () => {
//
//     await axios.post("http://localhost:7000/api/subscription", {
//         name:"Subscription for userId = 3 z",
//         description:"Netflix",
//         pricePerMonth:200.50
//     },{
//         headers:{
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJ1c2VyM0BtYWlsLnJ1Iiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2NzgyNjgyOTQsImV4cCI6MTY3ODM1NDY5NH0.qDW2lY_rFPwDZHzfiAd4Fu6-G3VepElmFq2SNN2BO8g',
//         }}).then(response => console.log(response.data.subscription))
//
// }, [])

// useEffect(async () => {
//
//     await axios.get("http://localhost:7000/api/subscription", {
//         headers:{
//             'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJ1c2VyM0BtYWlsLnJ1Iiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2NzgyNjgyOTQsImV4cCI6MTY3ODM1NDY5NH0.qDW2lY_rFPwDZHzfiAd4Fu6-G3VepElmFq2SNN2BO8g',
//         }
//     }).then(response => setSubscriptions(response.data.subscriptions))
//
// }, [])
//
//
//
// console.log(subscriptions)
import * as React from "react";
import "./style.css";
import "./components/bootstrap.min.css";

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import States from './states.js'


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  
}));


function API() {
  
  const classes = useStyles();

  const [users, setUsers] = React.useState([]);
  const [command, setCommand] = React.useState("all");

  const g=() =>{
    users.sort(function(a,b){
      return a.population-b.population;
    })
    return users;
  }


  const f = async (name) => {
    var input_value=document.getElementById("input_value");
    var res=[];
        if(name==='search' && input_value!=="" ){
              res = await fetch("https://restcountries.eu/rest/v2/name/"+input_value.value.toLowerCase()+"?fullText=true");
              const json = await res.json();
              setUsers(json);
        }else if(name==='sort'){
              setUsers(g());
        }else if(name==='all'){
              res = await fetch("https://restcountries.eu/rest/v2/all");
              const json = await res.json();
              setUsers(json);
        }else{
              console.log(command);
        }
    };

  return (
  
<div>
  <br></br>
        <FormLabel component="legend">Search here...</FormLabel>
        <TextField id="input_value" label="Search Country"/>

      <div className="text-center">
         <Button style={{margin:"20px"}}  variant="contained" onClick={()=>{setCommand("all"); f('all');}} color="secondary">Show all</Button>
         <Button style={{margin:"20px"}}  variant="contained" onClick={()=>{setCommand("search"); f('search');}} color="primary">Search</Button>
         <Button style={{margin:"20px"}}  variant="contained"  onClick={()=>{setCommand("sort");f('sort');}} color="secondary">Sort by population</Button>
      </div>
        {
         users.length<10 &&
         users.status!==404?
                  <FormHelperText className="text-center" style={{fontSize:"20px"}}>Countries: {users.map((user)=>(user.name))}</FormHelperText>
              :  <FormHelperText className="text-center" style={{fontSize:"20px"}}>All countries</FormHelperText>     
        }

  <div style={{overflow: "scroll", border: "1px solid black",padding:"10px",margin:"20px", height: "600px"}}>     
        {
      <TableContainer component={Paper} style={{backgroundColor:"crimson"}} >
      <Table className={classes.table} aria-label="simple table">
        <TableHead style={{backgroundColor:"yellow"}}>
          <TableRow>
            <TableCell >Country</TableCell>
            <TableCell align="center">Capital</TableCell>
            <TableCell align="center">Native Language&nbsp;</TableCell>
            <TableCell align="center">Population&nbsp;</TableCell>
            <TableCell align="center">Border &nbsp;</TableCell>
            <TableCell align="center">Area&nbsp;</TableCell>
            <TableCell align="center">Currencies&nbsp;</TableCell>
            <TableCell align="center">National flag&nbsp;</TableCell>
          </TableRow>
          </TableHead>

          <TableBody>
          {users.status!=404 && users.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell align="center">{row.capital}</TableCell>
              <TableCell  align="center">{row.nativeName}</TableCell>
              <TableCell align="center">{row.population}</TableCell>
              <TableCell align="center">{row.borders[0]}</TableCell>
              <TableCell align="center">{row.area}</TableCell>
              <TableCell align="center">{row.currencies[0].name}</TableCell>
              <TableCell align="center"><img style={{height:"150px",width:"150px"}} src={row.flag}></img></TableCell>
            </TableRow>
          ))}
          </TableBody>

      </Table>
    </TableContainer>
          }
      </div>

        <div>
      {users.length<100?<h3>Press Show ALL</h3> :<div><h3>Dashboard</h3><States country_data={users}/></div>}
        </div>
    </div>
 
  );
}
export default API;


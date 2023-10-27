#! /usr/bin/env node
import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";

let ask=await inquirer.prompt([
    {
        type:"number",
        message:"Provide Hours",
        name:"Hrs"
    },
    {
        type:"number",
        message:"Provide Minutes",
        name:"Min"
    },
    {
        type:"number",
        message:"Provide Seconds",
        name:"Sec"
    }
])

async function Timer(hours:number,min:number,sec:number) {
  const time=new Date();

    const time_form=new Date();
    time_form.setHours(time.getHours()+hours);
    time_form.setMinutes(time.getMinutes()+min);
    time_form.setSeconds(time.getSeconds()+sec);
    console.log(`confirming time given:${hours.toString().padStart(2,"0")}:${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}\nYour time starts now`);
    setInterval(()=>{
        const curr_Time=new Date();
        const time_diff=differenceInSeconds(time_form,curr_Time);
        if(time_diff<=0){
            console.log("Timer Expired");
            process.exit();
        }
        else{
            
            const min=Math.floor((time_diff%(3600))/60);
            const second=Math.floor(time_diff%60);
            const hrs=Math.floor(time_diff/3600);
            console.log(`${hrs.toString().padStart(2,"0")}:${min.toString().padStart(2,"0")}:${second.toString().padStart(2,"0")}`);
        }
    },1000); 
}

Timer(ask.Hrs,ask.Min,ask.Sec); 
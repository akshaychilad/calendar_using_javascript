        const calendar=document.querySelector("#calendar");
         const days=document.querySelector(".days");
         const monthArr=["Janaury","February","March","April","May","June","July","August","September","October","November","December"];
         const month=[];
         var selectYear,monthNumber,firstchild;;
         var selectMonth=document.querySelector('select');

        // Date methods to access month and year
         const date=new Date();
         const thisMonth=new Date().getMonth()+1;
         const thisYear=new Date().getFullYear();
         let totalDays=new Date(2020,04,0).getDate();

        // Initial Call
        addDays(thisMonth,thisYear);


         monthArr.forEach((element,index)=>{             
             month.push(`<option ${index == date.getMonth() ? 'selected' : ' '} value="${index}">${element}</option>`);
            // select.innerHTML+=;
         })
         selectMonth.innerHTML=month.join("");


        //  Called on onClick
         function display(){
             selectMonth=document.querySelector('select').value;
             selectYear=document.querySelector('input#year').value
             monthNumber=Number(selectMonth)+1;
             addDays(monthNumber,selectYear);
         }
         
    
        // Adding Days
        function addDays(selectMonth,selectYear){
            clearOldMonth();
            totalDays=new Date(selectYear,selectMonth,0).getDate();
            for(i=1;i<=totalDays;i++){
                days.innerHTML+=`<li style="${i==1 ? 'margin-left:'+(44*new Date(selectYear,selectMonth-1,1).getDay())+'px': ' '}" class="${i == date.getDate() && selectMonth==date.getMonth()  ? 'active' : ' '  }"> ${i} </li>`;  
            } 
        }

        
              
        //  Removes the current month data
         function clearOldMonth(){
            days.innerHTML=" "   
         }

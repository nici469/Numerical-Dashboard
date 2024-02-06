<script lang="ts">
  import Unitcards from "components/unitcards.svelte";
  type DashboardData=number[]

  
  let dashboardData:DashboardData=[0,0,0,0]
  $: total=dashboardData.reduce((prev,current)=>(prev+current))
  
  let dateTime={date:"30/1/2024",timeString:"12:50 PM",weekDay:"Tuesday"}
  var GetData=async()=>{
    var values=[];
    for(let i=0;i<4;i++){
      let randomValue=Math.random()*10 +35;
      values.push(randomValue)
    }
    // return values
    dashboardData=values
    dateTime=GetDateTime()
    
  }
  setInterval(GetData,2000);

  function GetDateTime(){
    var dateObj=new Date();
    var _dateTime=dateObj.toLocaleString('en-US', 
        { 
          hour: 'numeric', minute: 'numeric', 
          hour12: true ,day:'numeric',
          month:'numeric',year:'numeric'
        }).split(', ')
    /**as 02/02/2024 style*/
    var date=_dateTime[0];
    /**as 12:00:00 style*/
    var time=_dateTime[1];
    /**convert the time to 12:00 style*/
    var timeString=`${time.split(":")[0]}:${time.split(":")[1]}`
    var numberToWeekDay:{[key:number]:string}={0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"};
    var weekDay=numberToWeekDay[dateObj.getDay()]
    return {weekDay:weekDay,date,timeString}
  }

  

</script>

<main class="w-[80rem] h-[100%] absolute">

  <!-- Frequency and Voltage -->
  <div class="absolute left-[2.94rem] top-[1.81rem] text-white font-['Helvetica_Neue']">
    <!-- <div class="text-[2.25rem] font-[500] text-left">132<span class="ml-[4px]">KV</span></div> -->
    <div class="text-left text-[2.5rem] font-[700]">{dashboardData.length} Boards<span class="ml-[4px]"></span></div>
  </div>

  <!-- fIPL Logo -->
  <div class="absolute flex top-[2.38rem] justify-center w-[100%]">
    <img class="w-[12.5rem] h-[4.9rem]" src="/logo.png" alt="FIPL LOGO">
  </div>

  <!-- Date and time -->
  <div class="absolute w-[22.6rem] h-[5.565rem] right-[2.94rem] top-[1.81rem] text-white font-['Helvetica_Neue']">
    <div class="text-[2.25rem] font-[500] text-right">{dateTime.weekDay}, {dateTime.date}</div>
    <div class="text-right text-[2.5rem] font-[700]">{dateTime.timeString}</div>
    <div class="flex justify-end text-[40px] font-[Inter] items-center">
      <svg width="40" height="28" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M37.6155 13.5521C36.3741 12.3098 34.7226 11.4728 32.8883 11.2404C32.7284 8.36885 31.5102 5.77167 29.6023 3.86604C27.5561 1.81768 24.7173 0.547759 21.593 0.548462C18.6667 0.547759 15.9896 1.6626 13.9816 3.4869C12.2541 5.05401 11.0169 7.15409 10.516 9.5244C10.0307 9.4437 9.53359 9.39815 9.02648 9.39815C6.53758 9.39752 4.27414 10.4096 2.64398 12.0422C1.01211 13.6721 -0.000312428 15.9356 7.23227e-08 18.4245C-0.000312428 20.9141 1.01211 23.1775 2.64406 24.8074C4.27422 26.4392 6.53766 27.4514 9.02656 27.4514H31.8586C34.1031 27.4514 36.1452 26.5386 37.6155 25.0667C39.0871 23.5967 40.0007 21.5546 40 19.3098C40.0007 17.0649 39.0872 15.0221 37.6155 13.5521ZM36.1136 23.5643C35.0212 24.655 33.5237 25.3265 31.8587 25.3271H9.02656C7.11711 25.3265 5.39828 24.5564 4.14563 23.305C2.895 22.0529 2.12453 20.3342 2.12391 18.4244C2.12453 16.5153 2.895 14.7959 4.14563 13.5438C5.39836 12.2931 7.11719 11.5223 9.02656 11.5217C9.73945 11.5217 10.4234 11.6292 11.0684 11.8292L12.3063 12.2118L12.4386 10.9225C12.6764 8.60604 13.7734 6.54518 15.4091 5.05948C17.0459 3.5751 19.209 2.6726 21.5931 2.6726C24.1379 2.6726 26.432 3.70057 28.1009 5.36831C29.7679 7.03682 30.7963 9.33127 30.7966 11.876C30.7966 11.9657 30.7925 12.0705 30.7883 12.1932L30.748 13.3356L31.8762 13.2922C33.534 13.2977 35.0249 13.9678 36.1135 15.0545C37.2042 16.1472 37.8758 17.6447 37.8761 19.3097C37.8758 20.9747 37.2043 22.4722 36.1136 23.5643Z" fill="white"/>
      </svg>
      <div class="ml-[10px] font-[HelveticaLight]">30<span class="ml[-5px]">°C</span></div>
        
    </div>
  </div>

  <div class="relative top-[10.4rem]">
    <div class="flex justify-center flex-col items-center">
      <div class="text-white text-center text-[2.25rem] font-[500] font-[Montserrat]">Total Generation</div>
      <div class="total">
        <span class="">{total.toFixed(0)}</span>
        <span class="total-mwh text-[white] text-[3rem] font-[500] ml-[-20px]">
          Units
        </span>
      </div>

    </div>
  </div>

  <div class="absolute top-[23.6rem] ">
    <div class="grid justify-around  grid-cols-4 w-[100vw] ">
      
      <Unitcards name="DATA1" value={dashboardData[0]+30} maxValue={100}/>
      <Unitcards name="DATA2" value={dashboardData[1]-10} maxValue={100}/>
      <Unitcards name="DATA3" value={dashboardData[2]} maxValue={100}/>
      <Unitcards name="DATA4" value={dashboardData[3]} maxValue={100}/>
  
    </div>

  </div>

  
</main>

<style>
  
  div.total{
    color: #FFF;
    text-align: center;
    text-shadow: 0px 8px 10px #000;
    font-family:Montserrat, sans-serif, Arial,'Helvetica Neue';
    font-size: 6rem;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    /* font-style: bold; */
  }

  
</style>

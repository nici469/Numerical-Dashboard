<script lang="ts">
    export let value:number=0;
    export let name="STATION";
    export let maxValue=400;
    let strokeColor="#D9D9D9"

    
    $:{
      let percentValue=value/maxValue;
      if(percentValue<0.3) strokeColor="#D61A0C";
      else if (percentValue>=0.3 && percentValue<0.6) strokeColor="#F9D91B";
      else strokeColor="#6DB911";

      // console.log(name,percentValue)
    }

    function GetColor(value:number){
      var _percentValue=value/maxValue;
      var _strokeColor="#D9D9D9"
      if(_percentValue<0.3) _strokeColor="#D61A0C";
      else if (_percentValue>=0.3 && _percentValue<0.6) _strokeColor="#F9D91B";
      else _strokeColor="#6DB911";
      console.log(name,_percentValue)

      return _strokeColor
    }
    //red="#D61A0C"
    //yellow="#F9D91B"
</script>

<div class="relative grid-item w-[18.25rem] h-[20.3125rem] rounded-[20px] ml-[17px] bg-[rgba(217,217,217,0.10)] text-white">
    <div class="flex justify-center mt-[2.81rem]">
      <svg width="231" height="116" viewBox="0 0 231 116" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i_79_34)">
          <path class="gauge" stroke="#D9D9D9" stroke-width="40" d="M211 115.5C211 90.1718 200.938 65.881 183.029 47.9713C165.119 30.0616 140.828 20 115.5 20C90.1718 20 65.881 30.0616 47.9713 47.9713C30.0616 65.881 20 90.1718 20 115.5" />
        </g>
        <g filter="url(#filter0_d_79_35)">
          <path class="slider" stroke={strokeColor} stroke-width="40" stroke-dasharray="300" stroke-dashoffset={301+(value/maxValue)*300} d="M211 115.5C211 90.1718 200.938 65.881 183.029 47.9713C165.119 30.0616 140.828 20 115.5 20C90.1718 20 65.881 30.0616 47.9713 47.9713C30.0616 65.881 20 90.1718 20 115.5" />
        </g>

        <defs>
          <filter id="filter0_i_79_34" x="0" y="0" width="235" height="119.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feMorphology radius="6" operator="erode" in="SourceAlpha" result="effect1_innerShadow_79_34"/>
          <feOffset dx="4" dy="4"/>
          <feGaussianBlur stdDeviation="5"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_79_34"/>
          </filter>
        </defs>

        <defs>
          <filter id="filter0_d_79_35" x="0" y="0" width="239" height="123.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feMorphology radius="2" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_79_34"/>
            <feOffset dx="1" dy="1"/>
            <feGaussianBlur stdDeviation="1"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_79_34"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_79_34" result="shape"/>
          </filter>
        </defs>
      </svg>
    </div>
    <div class="absolute w-[100%] top-[7.69rem] text-center h-[4.34rem] text-[4rem] leading-[100%] font-[500] font-['Helvetica_Neue']">
      {value>0?value.toFixed(0):0}
    </div>
    <div class="absolute h-[1.75rem] top-[12.44rem] w-[100%] text-center  text-[1.5rem] font-[600rem]">
      UNITS
    </div>
    <div class="absolute h-[3.19rem] w-[100%] text-center top-[15.56rem] text-[2.25rem] font-[Raleway] font-[600]">
        {name}
    </div>
</div>
<style>
  path{
    transition: all 1s linear;
    /* stroke-linecap:round  */
  }

  path.gauge{
    /* box-shadow: 0px 0px 20px 20px black; */
    /* background-color: red; */
    /**GNU GPL 3.0 license.. see License file*/
  }
</style>
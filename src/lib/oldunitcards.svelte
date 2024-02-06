<script lang="ts">
    export let value:number=0
    export let name="AFAM"
</script>

<div class="relative grid-item w-[18.25rem] h-[20.3125rem] rounded-[20px] ml-[17px] bg-[rgba(217,217,217,0.10)] text-white">
    <div class="flex justify-center mt-[2.81rem]">
      <svg width="231" height="116" viewBox="0 0 231 116" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path stroke="#D9D9D9" stroke-width="40" d="M211 115.5C211 90.1718 200.938 65.881 183.029 47.9713C165.119 30.0616 140.828 20 115.5 20C90.1718 20 65.881 30.0616 47.9713 47.9713C30.0616 65.881 20 90.1718 20 115.5" />
        <path stroke="#6DB911" stroke-width="40" stroke-dasharray="300" stroke-dashoffset="500" d="M211 115.5C211 90.1718 200.938 65.881 183.029 47.9713C165.119 30.0616 140.828 20 115.5 20C90.1718 20 65.881 30.0616 47.9713 47.9713C30.0616 65.881 20 90.1718 20 115.5" />
      </svg>
    </div>
    <div class="absolute w-[100%] top-[7.69rem] text-center h-[4.34rem] text-[4rem] leading-[100%] font-[500] font-['Helvetica_Neue']">
      {value>0?value.toFixed(1):0}
    </div>
    <div class="absolute h-[1.75rem] top-[12.44rem] w-[100%] text-center  text-[1.5rem] font-[600rem]">
      MW
    </div>
    <div class="absolute h-[3.19rem] w-[100%] text-center top-[15.56rem] text-[2.25rem] font-[Raleway] font-[600]">
        {name}
    </div>
</div>
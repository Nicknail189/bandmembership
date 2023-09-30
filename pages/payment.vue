<template>
<div class="flex flex-row justify-center items-center">
    <div class="w-full md:w-9/12">
    <Navigation/>
    <!-- <NuxtLink to="https://www.zztop.com/"><div class="flex justify-center"><img class="py-10 px-3 md:px-0 w-4/12" src="@/assets/images/zz/zzlogo.png" alt=""></div></NuxtLink> -->
    <NuxtLink to="https://foofighters.com/"><div class="flex justify-center"><img class="py-10 px-3 md:px-0 w-4/12" src="https://foofighters.com/wp-content/themes/foo-fighters/dist/fae79924e68901495343.svg" alt=""></div></NuxtLink>


    <!-- <img class="py-10 px-3 md:px-0" src="@/assets/images/3-MNoil.png" alt=""> -->
    <NuxtLink to="/register"><p class="font-extrabold text-[24px] text-white px-6 md:px-0 pb-4">Go Back</p></NuxtLink>

    <!-- ========== -->

    <div class="bodyclass">
        <!-- <NuxtLink to="https://www.midnightoil.com/">
        <div class="logo"></div>
        </NuxtLink> -->

         <!-- <NuxtLink to="https://store.zztop.com/">
        <div class="flex justify-center mb-10">
        <img src="@/assets/images/zz/zz2.jpg" alt="">
        </div>
        </NuxtLink> -->


        <!-- <ThePayment /> -->
        <div class="w-full md:w-8/12 mb-20">
        <Tour/>
            <br><br>
            <!-- <img src="@/assets/images/vip.png" alt=""> -->
            <!-- <img src="@/assets/images/zz/card.jpg" alt=""> -->
                <img src="https://shop.foofighters.com/cdn/shop/files/FFI125150.png?v=1691784927&width=533" alt="">
            <br>
            <h2 class="p-2 block font-light rounded-sm bg-black/10">Price - $5,000.00</h2>
            <br><br>
        <div>
        <h2 class="text-left text-[32px] mb-4 font-extrabold">READ CAREFULLY BEFORE PAYMENT</h2>
        
        <br><br>

        <div class="border-[1px] border-gray-100 bg-white/80 rounded-md p-4">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
            <NuxtLink to="https://www.paypal.com/us/home"><p class="text-[14px] text-blue-900 font-bold uppercase">Pay with</p></NuxtLink>
            <NuxtLink to="https://www.paypal.com/us/home"><img class="w-40 rounded-md" src="@/assets/images/paypal.png" alt=""></NuxtLink>
            <button @click="copyPaypal" class="py-2 px-4 rounded-sm bg-blue-900 hover:bg-white hover:text-blue-900 border-[1px] border-blue-900 text-white text-[12px]">COPY TAG</button>
        </div>
        </div>

        <br><br>

        <p>The Band and its management are expanding the using of cryptocurrency transaction as part of the payment options for cross-national and international purchase.</p>
        </div>

        <br><br>

        <!-- <div class="w-full flex flex-col items-center justify-center pt-4 bg-white rounded-md">
            <div class="max-w-[180px] max-h-[240px]">
            <img src="@/assets/images/qr.png" alt="">
            </div>
            <br>
            <b class="text-[12px] mb-2 text-center">Scan the qr code in your wallet or click below to copy address</b>
            <button @click="copy" class="p-2 rounded-sm bg-black/20 hover:bg-black/30 font-thin">bc1qrwnqe3puqzjjg8tfzflelgt0shvfp7qpskuz9r</button>
        </div> -->

        <div class="bg-gray-100/80 border-[1px] border-gray-100 rounded-md p-4">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
            <NuxtLink to="https://bitcoin.org/en/"><p class="text-[14px] text-yellow-600 font-bold uppercase">Pay with</p></NuxtLink>
            <NuxtLink to="https://bitcoin.org/en/"><img class="w-40" src="@/assets/images/bitcoin.png" alt=""></NuxtLink>
            <button @click="copy" class="py-2 px-4 rounded-sm bg-yellow-600 hover:bg-white hover:text-yellow-600 border-[1px] border-yellow-600 text-white text-[12px]">COPY ADDRESS</button>
        </div>
        </div>

        <br><br>
        
        <p>Kindly send receipt to <span class="text-[16px] font-extrabold text-orange-700">bandconsultant0@gmail.com</span> for confirmation. After confirmation, you will receive a soft copy of your membership card. The hard copy of your membership card would be sent to your registered address.</p>

        <br><br><br>

        <div>
        <h2 class="text-left text-[32px] mb-4 font-extrabold">DIRECTIONS ON HOW TO USE THE BITCOIN ATM</h2>

        <p>Using a Bitcoin ATM is relatively straightforward, but the specific steps may vary slightly depending on the manufacturer and the particular machine you are using. However, here are the general steps to follow when using a Bitcoin ATM:</p>
        <br>
        <b>NOTE: THE BITCOIN ATM REQUIRES A CASH DEPOSIT</b>
        <br><br>
        <ul class="list-disc flex flex-col gap-3">
            <li>Find a Bitcoin ATM: Use a Bitcoin ATM map or website to locate a Bitcoin ATM near you. Websites like CoinATMRadar or Bitcoin ATM Map can help you find nearby machines.</li>
            <li>Approach the ATM: Go to the Bitcoin ATM location during its operating hours. These machines are typically found in public places, such as convenience stores, malls, or other retail establishments.</li>
            <li>Verify Identity (if required): Some Bitcoin ATMs may require identity verification, especially for larger transactions. This can involve providing a phone number, email address, or even a form of ID like a driver's license or passport.</li>
            <li>Start the Transaction: Begin the transaction by selecting the option to "Buy Bitcoin" on the ATM's screen.</li>
            <li>Enter the Amount: Enter the amount of Bitcoin you want to purchase. Some ATMs allow you to enter the amount in your local currency, while others require you to input it in Bitcoin.</li>
            <li>Insert Cash: Insert the cash you wish to use for the purchase into the ATM's cash deposit slot. The machine will display the amount of Bitcoin you will receive based on the current exchange rate.</li>
            <li>Confirm the Transaction: Carefully review the transaction details, including the amount, fees, and the Bitcoin address where the funds will be sent. Confirm that everything is correct.</li>
            <li>Keep Your Receipt: It's a good practice to keep the transaction receipt provided by the Bitcoin ATM as proof of your purchase.</li>
        </ul>
        </div>

        </div>
        <br><br>
    </div>
    </div>
</div>
</template>

<script>
export default {

    data(){
        return{
            address: 'bc1qrwnqe3puqzjjg8tfzflelgt0shvfp7qpskuz9r',
            paypal: 'Leapingdogadventures@gmail.com'
        }
    },
    methods: {
        copy(){
            try{
               navigator.clipboard.writeText(this.address);
            } catch(e){
                throw e
            }
            alert('Bitcoin Address Copied')
        },
        copyPaypal(){
            try{
               navigator.clipboard.writeText(this.paypal);
            } catch(e){
                throw e
            }
            alert('Paypal Tag Copied')
        }
    }
}
</script>
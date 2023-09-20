<template>
<div class="flex flex-col justify-center items-center">
    <!-- <NuxtLink to="https://www.midnightoil.com/">
        <div class="logo"></div>
    </NuxtLink> -->
    <NuxtLink to="https://store.zztop.com/">
        <div class="flex justify-center mb-10">
        <img src="@/assets/images/zz/zz2.jpg" alt="">
        </div>
    </NuxtLink>

    <div class="w-full md:w-8/12 mb-20">
        <Tour/>
        <div>
            <br>
            <form @submit="submitSignin" class="form">
                <div>
                <label class="text-orange-900 mb-4" for="firstname">First Name *</label><br>
                <input class="input" placeholder="Enter First name" type="text" v-model="form.firstname">
                </div>
                
                <div>
                <label class="text-orange-900 mb-4" for="lastname">Last Name *</label><br>
                <input class="input" placeholder="Enter Last name" type="text" v-model="form.lastname">
                </div>

                <div>
                <label class="text-orange-900 mb-4" for="email">Email *</label><br>
                <input class="input" placeholder="Enter Email" type="email" v-model="form.email">
                </div>

                <div>
                <label class="text-orange-900 mb-4" for="address">Address *</label><br>
                <input class="input" placeholder="Enter Address" type="text" v-model="form.address">
                </div>

                <div>
                <label class="text-orange-900 mb-4" for="zipcode">Zip Code *</label><br>
                <input class="input" placeholder="Enter Zip Code" type="number" v-model="form.zipcode">
                </div>

                <div>
                <label class="text-orange-900 mb-4" for="country">Country *</label><br>
                <input class="input" placeholder="Enter Country" type="text" v-model="form.country">
                </div>

                <div>
                <label class="text-orange-900 mb-4" for="referral">Referral Code *</label><br>
                <input class="input" placeholder="Enter Referral Code" type="text" v-model="form.referral">
                </div>

                <br><br>
                <!-- <NuxtLink to="payment"> -->
                <button @click="submitBtn" class="border-[4px] border-orange-700 md:border-0 px-3 md:px-10 py-[10px] text-[20px] font-extrabold rounded-sm md:bg-gray-200 hover:bg-black"><h4>PROCEED TO PAYMENT</h4></button>
                <!-- </NuxtLink> -->
            </form>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                firstname: '',
                lastname: '',
                email: '',
                address: '',
                zipcode: '',
                country: '',
                referral: '',
            }
        }
    },

    methods: {
        submitBtn(event){
      event.preventDefault()
        if (this.form.referral.trim() === '264973') {
          this.$router.push("/payment")
        } else {
          alert('Incorrect referral code')
        }
      }
    }
}
</script>

<style scoped>
button:hover h4 {
    color: white;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type-number] {
    -moz-appearance: textfield;
}
</style>

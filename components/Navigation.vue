<template>
    <nav class="pt-4 flex justify-between text-white relative px-4 md:px-0">

<!-- Link -->
<div class="flex md:items-center z-40 h-auto bg-black/90 text-[14px]">
    <div class=" md:hidden z-40">
        <NuxtLink to="" @click="this.close = !this.close" @mouseover="hoverDeg" @mouseout="reverse" class="relative left-0">
           <!-- <div id="first" class="transition-all ease-in-out delay-75 w-[32px] h-[2px] bg-white rotate-[-135deg] absolute top-[50%]"></div> -->
           <!-- <div id="second" class="transition-all ease-in-out delay-75 w-[32px] h-[2px] bg-white rotate-[-45deg] absolute top-[50%]"></div> -->
           <icon v-if="close === true" class="times gg" name="iconamoon:sign-times-duotone"/>
           <icon v-if="close === false" class="nav gg" name="streamline:interface-setting-menu-1-button-parallel-horizontal-lines-menu-navigation-three-hamburger"/>
        </NuxtLink>
    </div>
    <div class="fixed pt-20 md:pt-0 md:mt-0 bg-black/80 md:bg-none fixed md:relative top-[-80px] md:top-0 right-0 w-full md:w-auto">
        <div v-if="close === true" class="flex flex-col md:flex-row text-left md:items-center gap md:gap-2 pl-4 md:pl-0 mt-32 md:mt-0 md:relative h-screen md:h-auto w-12/12">
            <NuxtLink to="https://www.midnightoil.com/"><p>Home</p></NuxtLink>
            <NuxtLink to="https://www.midnightoil.com/news/"><p>News</p></NuxtLink>
            <NuxtLink to="https://www.midnightoil.com/tour/"><p>Tour</p></NuxtLink>
            <NuxtLink to="https://www.midnightoil.com/music/"><p>Music</p></NuxtLink>
            <NuxtLink to="https://www.midnightoil.com/photos/"><p>Photos</p></NuxtLink>
            <NuxtLink to="https://www.midnightoil.com/videos/"><p>Videos</p></NuxtLink>
            <NuxtLink to="https://www.midnightoil.com/the-band/"><p>Band</p></NuxtLink>
            <NuxtLink to="https://www.midnightoil.com/boxsets/"><p>Boxsets</p></NuxtLink>
            <NuxtLink to="https://www.midnightoil.com/store/"><p>Store</p></NuxtLink>
            <NuxtLink to="https://www.midnightoil.com/newsletter/"><p>Newsletter</p></NuxtLink>
            <!-- <NuxtLink to="https://foofighters.lnk.to/BHWA"><p>BUT HERE WE ARE</p></NuxtLink>
            <NuxtLink to="https://foofighters.com/news/"><p>NEWS</p></NuxtLink>
            <NuxtLink to="https://shopuk.foofighters.com/"><p>MERCH</p></NuxtLink>
            <NuxtLink to="https://foofighters.com/tour-dates/"><p>TOUR DATES</p></NuxtLink> -->

        </div>

        <div>
            <div v-if="close === false" class="hidden md:flex items-center gap-2">
            <NuxtLink to="https://www.midnightoil.com/"><p>Home</p></NuxtLink>
            <NuxtLink to="https://www.midnightoil.com/news/"><p>News</p></NuxtLink>
            <NuxtLink to="https://www.midnightoil.com/tour/"><p>Tour</p></NuxtLink>
            <NuxtLink to="https://www.midnightoil.com/music/"><p>Music</p></NuxtLink>
            <NuxtLink to="https://www.midnightoil.com/photos/"><p>Photos</p></NuxtLink>
            <NuxtLink to="https://www.midnightoil.com/videos/"><p>Videos</p></NuxtLink>
            <NuxtLink to="https://www.midnightoil.com/the-band/"><p>Band</p></NuxtLink>
            <NuxtLink to="https://www.midnightoil.com/boxsets/"><p>Boxsets</p></NuxtLink>
            <NuxtLink to="https://www.midnightoil.com/store/"><p>Store</p></NuxtLink>
            <NuxtLink to="https://www.midnightoil.com/newsletter/"><p>Newsletter</p></NuxtLink>
            <!-- <NuxtLink to="https://foofighters.lnk.to/BHWA"><p>BUT HERE WE ARE</p></NuxtLink>
            <NuxtLink to="https://foofighters.com/news/"><p>NEWS</p></NuxtLink>
            <NuxtLink to="https://shopuk.foofighters.com/"><p>MERCH</p></NuxtLink>
            <NuxtLink to="https://foofighters.com/tour-dates/"><p>TOUR DATES</p></NuxtLink> -->
        </div>
        </div>
    </div>
</div>

<!-- Socials -->
        <div class="w-12/12 relative right-[0px]">
            <div class="flex items-center gap-2">
                <NuxtLink to="https://www.facebook.com/midnightoilofficial"><icon name="ri:facebook-fill"/></NuxtLink>
                <NuxtLink to="https://instagram.com/midnightoilband"><icon name="mdi:instagram"/></NuxtLink>
                <NuxtLink to="https://twitter.com/midnightoilband"><icon name="mdi:twitter"/></NuxtLink>
                <NuxtLink to="https://www.youtube.com/MidnightOilVEVO"><icon name="fa6-brands:youtube"/></NuxtLink>
                <NuxtLink to="https://www.midnightoil.com/store/spotify:artist:72KyoXzp0NOQij6OcmZUxk"><icon name="mdi:spotify"/></NuxtLink>
                <NuxtLink to="https://geo.itunes.apple.com/au/artist/midnight-oil/18747421?mt=1&app=music"><icon name="ic:baseline-apple"/></NuxtLink>

                <!-- <NuxtLink to="https://web.facebook.com/foofighters/?_rdc=1&_rdr"><icon name="ri:facebook-fill"/></NuxtLink>
                <NuxtLink to="https://www.instagram.com/foofighters/"><icon name="mdi:instagram"/></NuxtLink>
                <NuxtLink to="https://twitter.com/foofighters"><icon name="mdi:twitter"/></NuxtLink>
                <NuxtLink to="https://www.youtube.com/user/foofighters"><icon name="fa6-brands:youtube"/></NuxtLink> -->
            </div>
        </div>
    </nav>
</template>

<script>
export default{
    data() {
        return {
            close: false,
        }
    },

       methods: {
       hoverDeg(){
           const first = document.getElementById('first')
           const second = document.getElementById('second')
           first.style.rotate = "135deg"
           second.style.rotate = "45deg"
       },
       reverse(){
           const first = document.getElementById('first')
           const second = document.getElementById('second')
           first.style.rotate = "-4deg"
           second.style.rotate = "-4deg"
       },
   }

}
</script>

<style scoped>
.icon, p {
    cursor: pointer;
}

.icon {
    font-size: 24px;
    /* font-size: 32px; */
    
}

.icon:hover, p:hover {
    color: rgb(193, 0, 0);
    /* color: gray; */
}

.nav {
    /* font-size: 32px; */
    font-size: 20px;
}

.times {
    /* font-size: 40px; */
    font-size: 20px;
}

.gg:hover {
    color: gainsboro;
}
</style>

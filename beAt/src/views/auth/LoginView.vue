<template>
    <main class="w-full h-screen overflow-hidden bg-brand-blue flex flex-col justify-center items-center content-center">
        <!-- <h1 class="text-7xl font-bold mt-12">Locus</h1> -->
        <input type="checkbox" id="chk" aria-hidden="true" class="hidden">

        <div class="w-full">
            <form class="login flex flex-col items-stretch gap-4 w-full p-4">
                <label for="chk" aria-hidden="true" class="mb-4 text-3xl font-bold text-center text-white">Log in</label>
                <input class="h-12 rounded-lg px-4 font-semibold text-lg" type="username" name="username" placeholder="Username"
                    required="">
                <input class="h-12 rounded-lg px-4 font-semibold text-lg" type="password" name="pswd" placeholder="Password"
                    required="">
                <div class="text-center">
                    <button class="mt-4 w-2/3 h-12 rounded-lg text-xl font-semibold bg-blue-300">Log in</button>
                </div>
            </form>
        </div>

        <div class="register w-full bg-white rounded-tl-3xl rounded-tr-3xl">
            <form class="flex flex-col items-stretch gap-4 w-full p-4">
                <label for="chk" aria-hidden="true"
                    class="mb-4 text-3xl font-bold text-center text-brand-black">Register</label>
                <input class="h-12 rounded-lg px-4 font-semibold text-lg" type="text" name="txt" placeholder="Username"
                    required="">
                <input class="h-12 rounded-lg px-4 font-semibold text-lg" type="email" name="email" placeholder="Email"
                    required="">
                <input class="h-12 rounded-lg px-4 font-semibold text-lg" type="password" name="pswd" placeholder="Password"
                    required="">
                <div class="text-center">
                    <button class="mt-4 w-2/3 h-12 rounded-lg text-xl font-semibold bg-blue-300">Register</button>
                </div>
            </form>
        </div>
    </main>
</template>
<script setup>
</script>
<style scoped>
.register {
    transform: translateY(60%);
    transition: .8s ease-in-out;
    height: 1000px;
    z-index: 20;
}

#chk:checked~.register {
    transform: translateY(-40%);
}
#chk:checked~.login {
    transform: translateY(-25%);
}

.login {
    transform: translateY(25%);
    transition: .8s ease-in-out;
}</style>
<template>
    <div class="container">
        <div class="columns  mt-48">
            <div class="column is-one-quarter gradient-down-up">
                <h1 class="title text-center">mrhn.io</h1>
            </div>
            <div class="column gradient-right">
                <p class="bd-notification is-info is-three-quarters">First column</p>
            </div>
        </div>
        <div class="columns" style="border-top-style: solid; border-top-width: 3px;border-color: #000000;">
            <div class="column is-one-quarter gradient-down-right">
                <p class="bd-notification is-info is-one-quarter">menu 1</p>
                <p class="bd-notification is-info is-one-quarter">menu 2</p>
                <p class="bd-notification is-info is-one-quarter">menu 2</p>
                <p class="bd-notification is-info is-one-quarter">menu 2</p>
                <p class="bd-notification is-info is-one-quarter">menu 2</p>
            </div>
            <div class="column">
                <p class="bd-notification is-inf is-three-quarters">First column</p>
            </div>
        </div>
    </div>
</template>
<style>
    .gradient-down-right {
        border-width: 3px;
        border-style: solid;
        border-left-style: none;
        border-image:
                linear-gradient(
                        to bottom,
                        black,
                        rgba(0, 0, 0, 0)
                ) 1 100%;
    }

    .gradient-down-up {
        border-width: 3px;
        border-style: solid;
        border-left-style: none;
        border-image:
                linear-gradient(
                        to top,
                        black,
                        rgba(0, 0, 0, 0)
                ) 1 100%;
    }
</style>

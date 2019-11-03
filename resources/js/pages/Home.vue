<template>
    <div class="container">
        <navbar-app></navbar-app>
        <content-app></content-app>
    </div>
</template>

<script>

import navbarApp from '../components/navbar'
import contentApp from '../components/content'

export default {
    components: {
        navbarApp,
        contentApp
    }    
}
</script>
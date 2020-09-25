<template>
    <div class="secnavBar">
        <router-link to="/terms-of-use" > Terms of use </router-link>
        <router-link to="/privacy-policy" > Privacy Policy </router-link>
    </div>
</template>
<script>
export default {
    name: 'TermsPrivacyNav',
}
</script>
<style scoped>
.secnavBar {
    height: 60px;
    border: 1px solid #eae9e9;
    border-left: 0;
    border-right: 0;
    display: flex;
    align-items: center;
    padding: 10px 25px;
}

.secnavBar a {
    color: #000;
    font-size: 20px;
    font-weight: 600;
    width: 150px;
    text-align: center;
    text-decoration: none;
    padding: 12px;
}

.secnavBar a:hover {
    background: #f2f2f2
}

.router-link-active{
    border-bottom: 3px solid green;
    color: green !important;
}
</style>
<template>
    <footer id="contacts">
        <div class="headers">
            <h3>CONTACT</h3>
            <h2>We're focused on building brands and a better future.</h2>
            <h2>If you'd like to partner with us, we're <a href="">here</a> to talk.</h2>
        </div>
        <div class="contacts-container">
            <div class="contacts">
                <p>Open Spaces</p>
                <p>GIR</p>
                <p>Letterfolk</p>
                <p>Yield</p>
                <p>Poketo</p>
                <p>Equal Parts</p>
            </div>
            <div class="contacts">
                <p>Careers</p>
                <p>Press</p>
            </div>
            <div class="contacts">
                <p>Instagram</p>
                <p>Twitter</p>
            </div>
            <div class="contacts">
                <p>228 Park Ave S.</p>
                <p>New York, NY 10003</p>
                <p>acquisitions@patternbrands.com</p>
            </div>
        </div>
        <hr>
        <p class="copyright">© 2022 Pattern Brands</p>
    </footer>

    
</template>

<style>
footer {
    background-color: #084935;
    padding-inline: 72px;
    color: #fff;
    height: auto;
    position: relative;
}

 .headers {
    padding-top: 113px;
}

.headers h3 {
font-size: 12px;
line-height: 18px;
margin-bottom: 10px;
}

.headers h2 {
font-size: 30px;
line-height: 38.4px;
}

.headers h2 a {
    color: #fff;
    opacity: 72%;
}

footer .contacts-container {
    width: 100%;
    margin: 80px 0;
    display: flex;
    align-items: start;
    gap: 150px;
}

.contacts-container .contacts p {
    width: 100%;
    font-size: 16px;
    line-height: 24px;
    margin: 2px;
    opacity: 72%;
}

hr {
    width: 200%;
    overflow: hidden;
    position: absolute;
    top: 520px;
    left: -50%;
}

 .copyright {
font-size: 16px;
line-height: 24px;
height: 40px;
margin-top: 10px;
}

</style>
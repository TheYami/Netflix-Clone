import styled from "styled-components";

export const FooterCon = styled.footer`
    background:#000;
    color:rgba(255,255,255,0.7);
    padding:3rem 15rem;

    p{
        font-size:1rem;
        font-weight:400;
        margin-bottom:0.75rem;
    }

    .container{
        display:grid;
        grid-template-columns:repeat(4,1fr);
        margin:1.rem 0
    }

    .container ul{
        list-style:none;
    }

    .container ul li{
        margin:1rem 0;
    }

    .container ul li a{
        font-size:1rem;
        color:rgba(255,255,255,.7);
    }

    select{
        background:transparent;
        color:rgba(255,255,255,.7);
        border-radius:5px;
        padding:0.3rem 1rem;
        display:inline-block;
        margin:.5rem 0;
    }

    .copy{
        margin-top:1rem;
    }
` 
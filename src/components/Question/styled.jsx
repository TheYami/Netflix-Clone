import styled from "styled-components";

export const FaqCon = styled.section`
    background:#000;
    color:#fff;

    .container{
        display:flex;
        justify-content:center;
    }

    .container1{
        background:#303030;
        font-size:1.5rem;
        width:1050px;
        display:flex;
        justify-content:space-between;
        padding:1rem 2rem;
        border-bottom:8px solid #000;
        align-items:center;
        cursor:pointer;
    }

    .faq__p{
        display:flex;
        justify-content:center;
    }

    .faq__p p{
        background:#303030;
        font-size:1.5rem;
        width:1050px;
        margin-bottom:0.5rem;
        padding:1rem 2rem;
        margin-bottom:.5rem;
    }

    button{
        background:#303030;
        border:none;
        color:#fff;
        padding:1rem;
        font-size:3rem;
        cursor:pointer;
    }
` 
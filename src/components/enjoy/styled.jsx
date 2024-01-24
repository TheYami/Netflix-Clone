import styled from "styled-components";

export const EnjoyCon = styled.section`
    background:black;
    color:#fff;
    display:flex;
    align-items:center;
    justify-content:space-between;
    height:460px;
    padding:5rem 15rem;
    border-bottom:8px solid #222;

    .enjoy__title{
        width:100%;
    }

    .enjoy__title h2{
        font-size:3rem;
        font-weight:900;
        font-family:'Arial';
    }

    .enjoy__title p{
        font-size:1.5rem;
        font-weight:400;
        margin-top:1rem;
    }

    .enjoy__img{
        width:100%;
        position:relative;
    }

    .enjoy__img img{
        position:relative;
        width:100%;
        z-index:1;
    }

    .enjoy__img video{
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-54%);
        width:73%;
    }
`
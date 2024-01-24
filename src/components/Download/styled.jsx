import styled from "styled-components";

export const DownLoadCon = styled.section`
    display:flex;
    justify-content:space-between;
    align-items:center;
    background:#000;
    color:#fff;
    padding:5rem 15rem;
    border-bottom:8px solid #222;

    .download__img{
        position:relative;
        width:100%;
    }

    .download__img img{
        width:100%;
        border:0;
    }

    .downloading{
        position:absolute;
        border:2px solid hsla(0,0%,100%,.25);
        border-radius:0.75rem;
        background:#000;
        display:flex;
        width:60%;
        min-width:15rem;
        height:100px;
        bottom:8%;
        left:50%;
        transform:translateX(-50%);
        justify-content:space-between;
        align-items:center;
        padding:0.5rem .75rem;
        margin:0 auto;
        z-index:1;
    }

    .downloading img{
        height:4.5rem;
        border:0;
        width:3rem
    }

    .downloading__text .blue{
        color:#0071eb;
    }

    .download__text{
        width:100%;
    }

    .download__title h2{
        font-size: 3rem;
        font-weight: 900
        margin:0;
    }

    .download__title p{
        font-size: 1.5rem;
        font-weight: 400;
        margin:1rem 0 0;
    }
` 